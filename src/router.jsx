import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { } from 'react-router'


import Sidebar from './components/sidebar';
import Home from './pages/home';
import { TestRegExp } from './pages/test-regexp';

const routers = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/test-regexp',
    name: 'Test RegExp',
    component: TestRegExp
  }
]

const Main = (
  <Router>
    <Sidebar routers={routers} />
    <div className="body">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/test-regexp" component={TestRegExp} />
        <Redirect to="/home" />
    </Switch>   
    </div>
  </Router>
)

export { routers };
export default Main;