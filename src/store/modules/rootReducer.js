import { combineReducers } from "redux";

import auth from "./auth/reducer";
import deliverymans from "./deliverymans/reducer";

export default combineReducers({
  auth,
  deliverymans
});
