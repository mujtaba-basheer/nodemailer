const express = require('express');
const mailer = require('./email');
const router = express.Router();

router.route('/send-mail').post(mailer);

module.exports = router;