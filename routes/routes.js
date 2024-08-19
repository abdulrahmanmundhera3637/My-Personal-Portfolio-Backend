const express = require('express');
const router = express.Router();
const { sendMail } = require('../Controller/appController');

/** HTTP Request */
router.post('/send-email', sendMail);

module.exports = router;
