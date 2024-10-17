const express = require('express');
const { generatePayroll } = require('../controllers/payrollController');
const router = express.Router();

router.post('/generate', generatePayroll);

module.exports = router;
