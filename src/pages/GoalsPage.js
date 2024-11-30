// // src/pages/GoalsPage.js
// import React from 'react';
// import GoalSettingForm from '../components/GoalSettingForm';

// const GoalsPage = () => {
//   return (
//     <div>
//       <h1>Goals Form</h1>
//       <GoalSettingForm />
//     </div>
//   );
// };

// export default GoalsPage;

// src/pages/GoalsPage.js

// import React, { useState } from 'react';
// import GoalSettingForm from '../components/GoalSettingForm';

// const GoalsPage = () => {
//   const [goals, setGoals] = useState([]);

//   const addGoal = (goal) => {
//     setGoals([...goals, goal]);
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Goals Page</h1>
//       <GoalSettingForm addGoal={addGoal} />
//       <div className="mt-4">
//         <h2>Your Goals</h2>
//         <ul className="list-group">
//           {goals.map((goal, index) => (
//             <li key={index} className="list-group-item">
//               <strong>Goal:</strong> {goal.goal} <br />
//               <strong>Deadline:</strong> {goal.deadline}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default GoalsPage;


import React, { useState, useEffect } from 'react';
import GoalSettingForm from '../components/GoalSettingForm';

const GoalsPage = () => {
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
      <h1>Goals Page</h1>
      <GoalSettingForm addGoal={addGoal} />
      <div className="mt-4">
        <h2>Your Goals</h2>
        <ul className="list-group">
          {goals.map((goal, index) => (
            <li key={index} className="list-group-item">
              <strong>Goal:</strong> {goal.goal} <br />
              <strong>Deadline:</strong> {goal.deadline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoalsPage;