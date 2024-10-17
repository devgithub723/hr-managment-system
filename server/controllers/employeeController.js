const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
    const { name, email, jobRole, salary } = req.body;
    try {
        const newEmployee = new Employee({ name, email, jobRole, salary });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Error creating employee' });
    }
};

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving employees' });
    }
};

// Add more methods for updating and deleting employee records...
