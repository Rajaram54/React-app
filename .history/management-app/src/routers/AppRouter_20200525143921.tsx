import App from '../app/App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const sampleApp = () => (
    <div>Hellow world</div>
  );
  
  const NotFound = () => (
    <div>Page not found 404!!!</div>
  );
  
  const routes = ()=> (
    <BrowserRouter>
      <Switch>
        <Route path='/create' component={sampleApp} exact={true}></Route>
        <Route path='/' component={App} exact={true}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  )