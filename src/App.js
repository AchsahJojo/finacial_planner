// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import './App.css';
import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    // <Router>
      <div>
        <Dashboard />
        <home />

      {/* <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
