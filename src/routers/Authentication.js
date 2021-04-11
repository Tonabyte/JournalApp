import React from 'react';

import {
  Route,
  Switch,
 } from 'react-router-dom';

// Screens
import Login from '../screens/authentication/Login';
import Register from '../screens/authentication/Register';

const Authentication = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
};

export default Authentication;
