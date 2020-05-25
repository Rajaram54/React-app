import React from 'react';
import './App.css';

function App() {
  return (
    <!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    body {
      font-family: "Lato", sans-serif;
    }
    
    .sidenav {
      height: 100%;
      width: 200px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      padding-top: 20px;
    }
    
    .sidenav a {
      padding: 6px 6px 6px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
    }
    
    .sidenav a:hover {
      color: #f1f1f1;
    }
    
    .main {
      margin-left: 200px; /* Same as the width of the sidenav */
    }
    
    @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 18px;}
    }
    </style>
    </head>
    <body>
    
    <div class="sidenav">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    
    <div class="main">
      <h2>Sidenav Example</h2>
      <p>This sidenav is always shown.</p>
    </div>
       
    
  );
}

export default App;