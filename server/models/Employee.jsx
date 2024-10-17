const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    jobRole: { type: String, required: true },
    salary: { type: Number, required: true },
    performanceHistory: { type: Array, default: [] },
    documents: { type: Array, default: [] }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
