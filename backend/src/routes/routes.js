const express = require('express');
const router = express.Router();
const testController = require("../controllers/testController")

// Route 
router.get('/', testController.greeting);

module.exports = router;
