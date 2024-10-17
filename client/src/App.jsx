import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeInfo from './pages/EmployeeInfo';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeInfo />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/payroll" element={<Payroll />} />
            </Routes>
        </Router>
    );
};

export default App;
