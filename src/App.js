import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Details from './component/Details';
import Items from './component/Items';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Items />} />
      </Routes>
      <Routes>
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
