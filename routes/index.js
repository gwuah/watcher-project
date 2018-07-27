const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const appController = require('../controllers/appController');

router.post('/register-via-email', userController.registerUser);
router.post('/interest-over-time', appController.getInterestOverTime);
// router.post('/interest-over-region', appController.getInterestByRegion);

module.exports = router;