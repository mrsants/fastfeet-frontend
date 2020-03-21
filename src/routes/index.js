import React from "react";
import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import Route from "./Route";
import Orders from "../pages/Orders";
import OrderRegister from "../pages/OrderRegister";
import Deliverymans from "../pages/Deliverymans";
import Recipient from "../pages/Recipient";

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
        exact
        component={props => <OrderRegister {...props} />}
        isPrivate
      />
      <Route
        path="/deliverymans"
        exact
        component={props => <Deliverymans {...props} />}
        isPrivate
      />
      <Route
        path="/recipient"
        exact
        component={props => <Recipient {...props} />}
        isPrivate
      />
    </Switch>
  );
}
