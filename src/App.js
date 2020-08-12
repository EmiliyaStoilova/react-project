import React from 'react';
import styles from './App.module.css';
import {
  BrowserRouter,
  Switch,
  Route 
} from 'react-router-dom'

import HomePage from '../src/pages/home'
import CreatePage from '../src/pages/create'
import LoginPage from '../src/pages/login'
import RegisterPage from '../src/pages/register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/create' component={CreatePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
