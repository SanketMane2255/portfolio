const express = require('express');
const router = express.Router();
const { addContact } = require('../controllers/contactController');

router.post('/contact', addContact);

module.exports = router;
