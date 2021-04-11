import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
 } from 'react-router-dom';

// Nested Routers
import Authentication from './Authentication';

// Screens
import Journal from '../screens/journal/Journal';

const Main = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={Authentication} />
          <Route exact path="/" component={Journal}  />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
