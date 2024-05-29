// src/App.js
import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="./Login"> Login </Link> <br></br>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;