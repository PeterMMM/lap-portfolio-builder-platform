const UserService = require('../services/UserService');

exports.validateUser = async (req, res) => {
    try {
        const data = {
            username: req.body.username,
            email: req.body.email
        };

        const result = await UserService.validateUser(data);

        if (result.success) {
            const data = {
                username: result.user.usr_name,
                email: result.user.email
            }
            res.status(200).json({ success: true, data: data, message: "OTP sent successfully" });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.validateOtpCodeController = async (req, res) => {
    try {
        const email = req.body.email;
        const otp = req.body.otp;

        const result = await UserService.validateOtpCodeService(email, otp);

        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};