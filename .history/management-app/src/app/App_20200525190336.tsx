import React from 'react';
import './App.css';

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">Clients</NavLink>
      <a href="#">Contact</a>
    </div>
    
    <div className="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
    </div>
       
    </>
  );
}

export default App;
