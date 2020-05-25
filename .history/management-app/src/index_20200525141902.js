import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import {BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const sampleApp = () => (
  <div>Hellow world</div>
);

const NotFound = () => (
  <div>Page not found 404!!!</div>
);

const routes = (
  <BrowserRouter>
    <>
      <Route path='/create' component={sampleApp} exact={true}></Route>
      <Route path='/' component={App} exact={true}></Route>
      <Route pcomponent={App}></Route>
    </>
  </BrowserRouter>
)
ReactDOM.render(routes, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
