import React, { useState, useEffect } from 'react';
import ExpenseEntryForm from '../components/ExpenseEntryForm';

const ExpensesPage = () => {
  const [goals, setGoals] = useState([]);

  // Load goals from local storage when the component mounts
  useEffect(() => {
    const storedGoals = localStorage.getItem('goals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // Save goals to local storage whenever the goals state changes
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
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
