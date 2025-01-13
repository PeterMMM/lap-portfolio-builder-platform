const {User} = require("../models/UserData")
const {Otp} = require("../models/OtpData")

exports.validateUserInfo = async (username, email) => {
    try {
        const user = await User.findOne({ usr_name: username, email: email });
        if (user) {
            return { valid: true, user: user };
        } else {
            return { valid: false, message: "User not found" };

        }
    } catch (error) {
        return { valid: false, message: error.message };
    }
}

exports.resetPassword = async(email, hashedPassword) => {
    try{
        const result = await User.findOneAndUpdate(
            { email },
            { password: hashedPassword },
            { new: true }
          );

          console.log(result)
          if (!result) {
            return { success: false, message: "User not found or update failed" };
          }
      
          return { success: true, message: "Password updated successfully" };
        } catch (error) {
          console.error("Error resetting password:", error);
          return { success: false, message: error.message };
        }
}

exports.insertOtpCode = async (user, otp) => {
    try {
        const otpEntry = new Otp({
            email: user.email,
            otp: otp,
            expiresAt: new Date(Date.now() + 10 * 60 * 1000) //expires in 10 minutes
        });
        const otpResult = await otpEntry.save();
        return { success: true, otp: otpResult };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

exports.validateOtpCode = async (email, otp) => {
    try {
        const otpEntry = await Otp.findOne({ email: email, otp: otp, isUsed: false });
        if (!otpEntry) {
            return { success: false, message: "Invalid OTP" };
        }
        if (otpEntry.expiresAt < new Date()) {
            return { success: false, message: "OTP has expired" };
        }
        otpEntry.isUsed = true;
        await otpEntry.save();
        return { success: true, message: "OTP is valid" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

const { ContactInfo } = require('../models/ContactInfoData');

exports.findUserByEmail = async (email) => {
    try {
        return await User.findOne({ email });
    } catch (error) {
        throw new Error("Error finding user by email");
    }
};

exports.createUser = async (data) => {
    try {
        const { username, email, password, roleId, contactInfo, skills } = data;

        const contactInfoDoc = new ContactInfo(contactInfo);
        await contactInfoDoc.save();
        console.log("Contact info saved:", contactInfoDoc);

        const newUser = new User({
            usr_name: username,
            email: email,
            password: password,
            usr_role_id: roleId,
            contact_info_id: contactInfoDoc._id,
            skill_ids: skills,
        });

        await newUser.save();
        console.log("New user created:", newUser);

        return newUser;
    } catch (error) {
        console.error("Error creating user in DAO:", error);
        throw new Error(error.message || "Error creating user");
    }
};