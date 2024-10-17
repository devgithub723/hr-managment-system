const Attendance = require('../models/Attendance');

exports.logAttendance = async (req, res) => {
    const { employeeId, clockInTime, clockOutTime, overtimeHours } = req.body;
    try {
        const attendance = new Attendance({
            employeeId, 
            date: new Date(), 
            clockInTime, 
            clockOutTime, 
            overtimeHours
        });
        await attendance.save();
        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ error: 'Error logging attendance' });
    }
};

// Additional attendance management methods...
