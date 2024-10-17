const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    date: { type: Date, required: true },
    clockInTime: { type: String, required: true },
    clockOutTime: { type: String, required: true },
    overtimeHours: { type: Number, default: 0 }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
