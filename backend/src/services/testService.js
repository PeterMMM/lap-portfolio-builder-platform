const { createTest } = require("../dao/testDao");


exports.createTest = async (data) => {
    const isSaved = await createTest(data);
    if (isSaved) {
        return { message: "SUCCESS" };
    } else {
        return { message: "FAIL" };
    }
};