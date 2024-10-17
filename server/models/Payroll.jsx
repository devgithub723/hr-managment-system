const mongoose = require('mongoose');

const PayrollSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    salary: { type: Number, required: true },
    taxDeduction: { type: Number, required: true },
    netPay: { type: Number, required: true },
    generatedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payroll', PayrollSchema);
