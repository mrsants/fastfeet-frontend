import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import history from "../../../services/history";
import { orderFailure, orderSuccess } from "./actions";

export function* orderCreate({ payload }) {
  const { recipient_id, deliveryman_id, product } = payload;
  try {
    yield api.post("/order-management", {
      recipient_id,
      deliveryman_id,
      product
    });

    yield put(orderSuccess());

    toast.success("Encomenda criada com sucesso!");

    history.push("/orders");
  } catch (err) {
    yield put(orderFailure());
    toast.error("Não foi possivel criar uma encomenda!");
  }
}


export function* orderNewUpdate({ payload }) {
  const { recipient_id, deliveryman_id, product, order_id } = payload;

  try {
    yield call(api.put, `order-management/${order_id}`, {
      recipient_id,
      deliveryman_id,
      product
    });

    yield put(orderSuccess());

    toast.success("Dados atualizados com sucesso!");

    history.push("/orders");
  } catch (err) {
    console.log(err);
    yield put(orderFailure());
    toast.error("Falha na atualização!");
  }
}

export function* orderUpdate() {
  history.push("/order-form-ui");
}

export default all([
  takeLatest("@orders/ORDER_CREATE", orderCreate),
  takeLatest("@orders/ORDER_NEW_UPDATE", orderNewUpdate),
  takeLatest("@orders/ORDER_UPDATE", orderUpdate),
]);
