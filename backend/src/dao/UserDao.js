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