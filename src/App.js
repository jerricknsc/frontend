// src/App.js
import React, {useState} from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import AboutUs from './AboutUs';
import Header from './Header';

function App() {

  const [showHome, setShowHome] = useState(false)

  return (
    <div className="App">
      <nav>
        <Link to="./Login"> Login </Link> <br></br>
        <Link to="./hello"> Home </Link> <br></br>
        <Link to="./AboutUs"> About Us </Link> <br></br>
        <Link to="./Header"> Header </Link>
      </nav>

      <Routes>
        <Route path="/hello" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;