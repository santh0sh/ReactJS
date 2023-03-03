import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import './SpaApp.css';

const App = () => {
  return (
    <div className="App">
      <h1 >SPA project by Murthy</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />}>
             <Route path=":id" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
