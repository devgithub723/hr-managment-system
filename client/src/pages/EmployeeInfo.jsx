import React, { useState, useEffect } from 'react';
import employeeService from '../services/employeeService';

const EmployeeInfo = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    return (
        <div>
            <h1>Employee Information</h1>
            {employees.map(employee => (
                <div key={employee._id}>
                    <h2>{employee.name}</h2>
                    <p>Email: {employee.email}</p>
                    <p>Role: {employee.jobRole}</p>
                    <p>Salary: {employee.salary}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployeeInfo;
