import React from 'react';
import './App.css';

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink to="#">About</NavLink>
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">Clients</NavLink>
      <NavLink href="#">Contact</NavLink>
    </div>
    
    <div className="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
    </div>
       
    </>
  );
}

export default App;
