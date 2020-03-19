import React from "react";
import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import Route from "./Route";
import OrderList from "../pages/OrderList";
import OrderRegister from "../pages/OrderRegister";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/order-list" exact component={OrderList} isPrivate />
      <Route path="/order-register" exact component={OrderRegister} isPrivate />
    </Switch>
  );
}
