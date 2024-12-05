// src/components/ExpenseEntryForm.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseEntryForm = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({ amount, description });
    // Handle form submission
    setAmount('');
  };

  const handleGoBack = () => {
    navigate('/');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};
export default ExpenseEntryForm;
