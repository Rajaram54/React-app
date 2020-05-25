import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink activeStyle={{isActive}} to="#">About</NavLink>
      <NavLink activeStyle={{}} to="#">Services</NavLink>
      <NavLink activeStyle={{}} to="#">Clients</NavLink>
      <NavLink activeStyle={{}} to="#">Contact</NavLink>
    </div>
    
    <div className="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
    </div>
       
    </>
  );
}

export default App;
