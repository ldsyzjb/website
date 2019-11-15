import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


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
    <Route path="/home" component={Home} />
    <Route path="/test-regexp" component={TestRegExp} />
  </Router>
)

export { routers };
export default Main;