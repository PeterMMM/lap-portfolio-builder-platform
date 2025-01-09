const express = require('express');
const router = express.Router();
const testController = require("../controllers/testController")

// Routes
router.get('/', testController.greeting);
router.get('/token', testController.generateToken);
router.get('/validate/:token', testController.validateToken);

//test route
router.post('/test', testController.createTest);

module.exports = router;
