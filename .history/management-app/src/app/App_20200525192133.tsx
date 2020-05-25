import React from 'react';
import './App.css';
import { NavLink, HashRouter, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink activeStyle={{}} to="#">About</NavLink>
      <NavLink activeStyle={{}} to="#">Services</NavLink>
      <NavLink activeStyle={{}} to="#">Clients</NavLink>
      <NavLink activeStyle={{}} to="#">Contact</NavLink>
    </div>
    
    <div className="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
      <HashRouter>
        <Route path="/about" component={{}} />
        <Route path="/settings" component={{}} />
        <Route path="/summa" component={{}} />

      </HashRouter>
    </div>
       
    </>
  );
}

export default App;
