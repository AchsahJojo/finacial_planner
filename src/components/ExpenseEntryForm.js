// src/components/ExpenseEntryForm.js
import React, { useState } from 'react';
const ExpenseEntryForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ amount, description });
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
