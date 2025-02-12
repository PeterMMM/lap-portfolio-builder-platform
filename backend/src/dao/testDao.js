const Test = require('../models/testData');

exports.createTest = async (data) => {
    try {
        const newTest = new Test(data);
        await newTest.save();
        return true;
    } catch (error) {
        console.error("Error saving test:", error);
        return false;
    }
};