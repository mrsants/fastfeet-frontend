import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} isPrivate />
    </Switch>
  );
}
