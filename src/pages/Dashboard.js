// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';
import logo from '../components/assets/logo.png';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-banner">
        <img src={logo} alt="Logo" className="banner-logo" />
        <h1 className="banner-title">College Student Financial Planner</h1>
      </div>
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-overview">Overview of your budget, expenses, and goals.</p>
      
      <h2>Budget Form</h2>
      <p>Put here your form. </p>

      <h2>Expenses Form</h2>
      <p>Put your form here. </p>

      <h2>Goals Form</h2>
      <p>Put your form here. </p>
    </div>
  );
};

export default Dashboard;
