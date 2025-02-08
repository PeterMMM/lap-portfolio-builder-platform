const UserDao = require("../dao/UserDao");
const ServerUtils = require("../utils/ServerUtils");
const jwt = require("../utils/jwt")

require("dotenv").config();

exports.validateUser = async (data) => {
  const username = data.username;
  const email = data.email;
  try {
    const result = await UserDao.validateUserInfo(username, email);
    if (result.valid) {
      const otpCode = await this.sendOtpCode(result.user);
      return { success: true, user: result.user, otpCode: otpCode };
    } else {
      return { success: false, message: result.message };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

exports.sendOtpCode = async (user) => {
  try {
    const otpCode = await ServerUtils.generateOTP();
    console.log(user)

    otpHtmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #4caf50;
      color: white;
      text-align: center;
      padding: 10px 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      text-align: center;
    }
    .otp {
      font-size: 36px;
      font-weight: bold;
      color: #4caf50;
      margin: 20px 0;
    }
    .footer {
      background-color: #f4f4f4;
      color: #777777;
      text-align: center;
      padding: 10px 20px;
      font-size: 12px;
    }
    .footer p {
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Your OTP Code</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>Your One-Time Password (OTP) for account verification is:</p>
      <div class="otp">${otpCode}</div>
      <p>Please use this code to complete your request. Note that the OTP is valid for only <strong>5 minutes</strong>.</p>
      <p>If you did not request this, please ignore this email.</p>
    </div>
    <div class="footer">
      <p>&copy; 2025 LAP-Portfolio Builder. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
    await ServerUtils.sendMail(
      user.email, // to
      process.env.SERVICE_EMAIL, //from
      "OPT Code, LAP-Portfolio Builder",
      otpHtmlTemplate
    );
    await UserDao.insertOtpCode(user, otpCode);
    return otpCode;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP");
  }
};

exports.resetPasswordService = async(email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await UserDao.resetPassword(email, hashedPassword);
    if (result.success) {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: result.message };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
}

exports.loginUser = async (data) => {
  const { email, password } = data;
  try {
    const result = await UserDao.login(email, password);
    if (result.success) {

      const userInfo = {
        email: result.user.email,
        username: result.user.usr_name
      }

      const accessToken = jwt.generateAccessToken(userInfo);
      const refreshToken = jwt.generateRefreshToken(userInfo);
      let token = {
        access_token: accessToken,
        refresh_token: refreshToken
      }

      return { success: true, message: result.message, user: userInfo, token: token };
    }else{
      return { success: false, message: result.message};
    }

  } catch (error) {
    return { success: false, message: error.message };
  }
};

exports.validateOtpCodeService = async (email, otp) => {
  try {
    const result = await UserDao.validateOtpCode(email, otp);
    if (result.success) {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: result.message };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};
const bcrypt = require('bcrypt');

exports.registerUser = async (data) => {
    const { username, email, password, roleId, contactInfo, skills } = data;

    try {
        const existingUser = await UserDao.findUserByEmail(email);
        if (existingUser) {
            console.log("User with this email already exists:", email);
            return { success: false, message: "User with this email already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully");

        const newUser = await UserDao.createUser({
            username,
            email,
            password: hashedPassword,
            roleId,
            contactInfo,
            skills
        });

        console.log("User created successfully:", newUser);
        return { success: true, user: newUser };
    } catch (error) {
        console.error("Error in registerUser service:", error);
        return { success: false, message: error.message || "Error creating user" };
    }
};

exports.deleteAccount = async (userId) => {
    try {
        return await UserDao.deleteUserById(userId);
    } catch (error) {
        throw new Error(`Service error: ${error.message}`);
    }
};
