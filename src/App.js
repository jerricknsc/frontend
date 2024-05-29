// src/App.js
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Link> Login </Link>
    </div>
  );
}

export default App;