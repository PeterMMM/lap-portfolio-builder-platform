const { createTest } = require("../dao/testDao");
const ServerUtils = require("../utils/ServerUtils")


exports.createTest = async (data) => {
    const isSaved = await createTest(data);
    if (isSaved) {
        return { message: "SUCCESS" };
    } else {
        return { message: "FAIL" };
    }
};


exports.sendOtpCode = async () => {
    try {
        const otpCode =  await ServerUtils.generateOTP();
        await ServerUtils.sendMail("brangtsawmaung89@gmail.com", "brangtsawmaung89@gmail.com", "OPT Code, LAP-Portfolio Builder", `<h1>${otpCode}</h1>`);
    } catch (error) {
        console.error("Error sending OTP:", error);
        throw new Error("Failed to send OTP");
    }
}