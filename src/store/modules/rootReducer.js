import { combineReducers } from "redux";

import auth from "./auth/reducer";
import orders from "./orders/reducer";

export default combineReducers({
  auth,
  orders
});
