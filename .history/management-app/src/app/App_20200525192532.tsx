import React from 'react';
import './App.css';
import { NavLink, HashRouter, Route } from 'react-router-dom';

const about = () => (
  <div>Simple about!!!</div>
);

const settings = () => (
  <div>Settings</div>
);


const settings = () => (
  <div>Settings</div>
);
const settings = () => (
  <div>Settings</div>
);

function App() {
  return (
  <>
    <div className="sidenav">
      <NavLink activeStyle={{}} exact to="/#/about">About</NavLink>
      <NavLink activeStyle={{}} exact to="/#/settings">Settings</NavLink>
      <NavLink activeStyle={{}} exact to="/#/clients">Clients</NavLink>
      <NavLink activeStyle={{}} exact to="/#/contact">Contact</NavLink>
    </div>
    
    <div className="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
      <HashRouter>
        <Route path="/about" component = {about} />
        <Route path="/settings" component ={settings} />
        <Route path="/clients" component = {} />
        <Route path="/contact" component = {} />

      </HashRouter>
    </div>
       
    </>
  );
}

export default App;
