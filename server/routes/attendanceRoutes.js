const express = require('express');
const { logAttendance } = require('../controllers/attendanceController');
const router = express.Router();

router.post('/log', logAttendance);

module.exports = router;
