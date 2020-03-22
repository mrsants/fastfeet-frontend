import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import deliverymans from "./deliverymans/sagas";

export default function* rootSaga() {
  return yield all([auth, deliverymans]);
}
