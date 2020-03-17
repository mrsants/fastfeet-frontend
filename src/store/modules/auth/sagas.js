import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import Api from "../../../services/auth";
import history from "../../../services/history";
import { signFailure, signInSuccess } from "./actions";

export function* signRequest({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(Api.post, "sessions", {
      email,
      password
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push("/home");
  } catch (err) {
    toast.error("Falha no cadastro, verifique seus dados!");

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    Api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_REQUEST", signRequest),
  takeLatest("@auth/SIGN_OUT", signOut)
]);
