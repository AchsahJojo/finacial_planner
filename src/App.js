// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Header';
// // import Home from './pages/Home';
// // import Dashboard from './pages/Dashboard';
// // import './App.css';
// import React from 'react';
// import Dashboard from './pages/Dashboard';
// import './App.css';
// import GoalsPage from './pages/GoalsPage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // function App() {
// //   return (
// //     // <Router>
// //       <div>
// //         <Dashboard />
// //         <home />
// //       </div>
// //     // </Router>
// //   );
// // }
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/GoalsPage" element={<GoalsPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GoalsPage from './pages/GoalsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/goalsPage" element={<GoalsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;