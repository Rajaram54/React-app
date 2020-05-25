import React from 'react';
import './App.css';
import {NavLink} 

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink to="#">About</NavLink>
      <NavLink to="#">Services</NavLink>
      <NavLink to="#">Clients</NavLink>
      <NavLink to="#">Contact</NavLink>
    </div>
    
    <div className="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
    </div>
       
    </>
  );
}

export default App;
