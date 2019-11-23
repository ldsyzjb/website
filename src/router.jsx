import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Sidebar from './components/sidebar';
import Body from './components/body';

import Home from './pages/home';
import { TestRegExp } from './pages/test-regexp';

const routers = [
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/test-regexp',
    name: '正则表达式校验',
    component: TestRegExp
  }
]

const Main = (
  <Router>
    <Sidebar routers={routers} />
    <Body className="body">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/test-regexp" component={TestRegExp} />
        <Redirect to="/home" />
    </Switch>   
    </Body>
  </Router>
)

export { routers };
export default Main;