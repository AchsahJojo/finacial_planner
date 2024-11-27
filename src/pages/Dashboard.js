// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import './Dashboard.css';
import logo from '../components/assets/logo.png';
import budgetIcon from '../components/assets/budget.png';
import expensesIcon from '../components/assets/expenses.png';
import targetIcon from '../components/assets/target.png';

const Dashboard = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-banner">
        <img src={logo} alt="Logo" className="banner-logo" />
        <h1 className="banner-title">College Student Financial Planner</h1>
      </div>
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="overview-container fade-in">
        <p className="dashboard-overview overview-text">This webiste is create by Jesus
          Garcia Loyola, Achsah Jojo, Abel Delgaodo, and Ethan Peregoy. <br />In this website 
          are are able to write your goals, expenses, and budget. </p>
      </div>
      
      <h2 className="fade-in">
        <img src={budgetIcon} alt="Budget Icon" className="header-icon" />
        Budget Form
      </h2>
      <p className="form-placeholder1">Put your form here.</p>

      <h2 className="fade-in">
        <img src={expensesIcon} alt="Expenses Icon" className="header-icon" />
        Expenses Form
      </h2>
      <p className="form-placeholder2">Put your form here.</p>

      <h2 className="fade-in">
        <img src={targetIcon} alt="Goals Icon" className="header-icon" />
        Goals Form
      </h2>
      <p className="form-placeholder1">Put your form here.</p>
    </div>
  );
};

export default Dashboard;
