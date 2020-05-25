import React from 'react';
import './App.css';

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink href="#">About</NavLink>
      <a href="#">Services</NavLink>
      <a href="#">Clients</a>
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
