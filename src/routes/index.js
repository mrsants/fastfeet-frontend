import React from "react";
import { Switch } from "react-router-dom";
import Deliverymans from "../pages/Deliverymans";
import DeliverymansRegister from "../pages/Deliverymans/DeliverymansRegister";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import OrderRegister from "../pages/Orders/OrderRegister";
import Problems from "../pages/Problems";
import Recipient from "../pages/Recipient";
import Route from "./Route";

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
        path="/order-register"
        component={props => <OrderRegister {...props} />}
        isPrivate
      />
      <Route
        path="/deliverymans"
        component={props => <Deliverymans {...props} />}
        isPrivate
      />
      <Route
        path="/deliverymans-register"
        component={props => <DeliverymansRegister {...props} />}
        isPrivate
      />
      <Route
        path="/recipient"
        component={props => <Recipient {...props} />}
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
