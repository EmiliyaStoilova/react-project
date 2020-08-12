import React, { useContext } from 'react';
import {
  BrowserRouter,
  Switch,
  Route 
} from 'react-router-dom'

import HomePage from '../src/pages/home'
import CreatePage from '../src/pages/create'
import ProfilePage from './pages/profile'
import LoginPage from '../src/pages/login'
import RegisterPage from '../src/pages/register'
import ErrorPage from './pages/error'
import UserContext from './Context';

function App() {
  const context = useContext(UserContext)
  const isLoggedIn = context.isLoggedIn
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/create' component={isLoggedIn ? CreatePage : LoginPage} />
        <Route exact path='/profile/:userid' component={isLoggedIn ? ProfilePage : LoginPage} />
        <Route path='/login' component={isLoggedIn ? ErrorPage : LoginPage} />
        <Route path='/register' component={isLoggedIn ? ErrorPage : RegisterPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
