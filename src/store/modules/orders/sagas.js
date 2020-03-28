import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { orderFailure, orderSuccess } from './actions';

export function* orderCreate({ payload }) {
  const { recipient_id, deliveryman_id, product } = payload;
  try {
    const { data } = yield api.post('/order-management', {
      recipient_id,
      deliveryman_id,
      product,
    });

    yield put(orderSuccess(data));

    toast.success('Encomenda criada com sucesso!');

    history.push('/orders');
  } catch (err) {
    yield put(orderFailure());
    toast.error('Não foi possivel criar uma encomenda!');
  }
}

export function* orderNewUpdate({ payload }) {
  const { recipient_id, deliveryman_id, product, order_id } = payload;

  try {
    yield call(api.put, `order-management/${order_id}`, {
      recipient_id,
      deliveryman_id,
      product,
    });

    yield put(orderSuccess());

    toast.success('Dados atualizados com sucesso!');

    history.push('/orders');
  } catch (err) {
    yield put(orderFailure());
    toast.error('Falha na atualização!');
  }
}

export function* orderUpdate({ payload }) {
  yield put(orderSuccess(payload.data));
  history.push('/order-form-ui');
}

export function* orderDelete({ payload }) {
  const { id } = payload;
  try {
    const { data } = yield api.get(`/order-management/${id}`);
    if (data.status === 'CANCELADA') {
      toast.error('Encomenda já está cancelada!');
    } else {
      yield api.delete(`/order-management/${id}`);
      yield put(orderSuccess(data));
      toast.success('Encomenda cancelada com sucesso!');
    }
  } catch (err) {
    yield put(orderFailure());
    toast.error('Falha na atualização!');
  }
}

export default all([
  takeLatest('@orders/ORDER_CREATE', orderCreate),
  takeLatest('@orders/ORDER_NEW_UPDATE', orderNewUpdate),
  takeLatest('@orders/ORDER_UPDATE', orderUpdate),
  takeLatest('@orders/ORDER_DELETE', orderDelete),
]);
