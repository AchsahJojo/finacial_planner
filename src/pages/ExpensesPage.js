import React, { useState, useEffect } from 'react';
import ExpenseEntryForm from '../components/ExpenseEntryForm';

const ExpensesPage = () => {
  const [expenses, addExpenses] = useState([]);

  // Load expenses from local storage when the component mounts
  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      addExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  // Save expenses to local storage whenever the expenses state changes
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    addExpenses([...expenses, expense]);
  };

  return (
    <div className="container mt-5">
      <h1>Expenses Page</h1>
      <ExpenseEntryForm addExpense={addExpense} />
      <div className="mt-4">
        <h2>Your Expenses</h2>
        <ul className="list-group">
          {expenses.map((expense, index) => (
            <li key={index} className="list-expense-item">
              <strong>Expense:</strong> {expense.expense} <br />
              <strong>Descriptoin:</strong> {expense.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpensesPage;
