import React from 'react';
import { Switch } from 'react-router-dom';
import Deliverymans from '../pages/Deliverymans';
import DeliverymansFormUi from '../pages/Deliverymans/DeliverymansFormUi';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import OrderFormUi from '../pages/Orders/OrderFormUi';
import Problems from '../pages/Problems';
import Recipient from '../pages/Recipient';
import RecipientRegister from '../pages/Recipient/RecipientRegister';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={props => <Login {...props} />} />
      <Route
        path="/orders"
        component={props => <Orders {...props} />}
        isPrivate
      />
      <Route
        path="/orders-form-ui"
        component={props => <OrderFormUi {...props} />}
        isPrivate
      />
      <Route
        path="/deliverymans"
        component={props => <Deliverymans {...props} />}
        isPrivate
      />
      <Route
        path="/deliverymans-form-ui"
        component={props => <DeliverymansFormUi {...props} />}
        isPrivate
      />
      <Route
        path="/recipient"
        component={props => <Recipient {...props} />}
        isPrivate
      />
      <Route
        path="/recipient-register"
        component={props => <RecipientRegister {...props} />}
        isPrivate
      />

      <Route
        path="/problems"
        component={props => <Problems {...props} />}
        isPrivate
      />
    </Switch>
  );
}
