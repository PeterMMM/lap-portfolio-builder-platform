const express = require('express');
const router = express.Router();
const testController = require("../controllers/testController")
const userController = require("../controllers/UserController")
const projectController = require("../controllers/ProjectController")

// Routes
router.get('/', testController.greeting);


//User
router.post('/validateUser', userController.validateUser)
router.post('/validateOtp', userController.validateOtpCodeController)
router.post('/resetPassword', userController.resetPassword)
router.post('/login', userController.login);
router.post('/register', userController.registerUser);

//Project
router.post('/projects', projectController.createProject);
router.delete('/projects/:id', projectController.deleteProject);


module.exports = router;
