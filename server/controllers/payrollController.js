const Payroll = require('../models/Payroll');

exports.generatePayroll = async (req, res) => {
    const { employeeId, salary, taxDeduction } = req.body;
    try {
        const netPay = salary - taxDeduction;
        const payroll = new Payroll({
            employeeId,
            salary,
            taxDeduction,
            netPay
        });
        await payroll.save();
        res.status(201).json(payroll);
    } catch (error) {
        res.status(500).json({ error: 'Error generating payroll' });
    }
};

// More payroll functions, such as retrieving past payrolls...
