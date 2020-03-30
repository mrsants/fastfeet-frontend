import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api/index';
import { deliverymansSuccess, deliverymansFailure } from './actions';

export function* deliverymansCreate({ payload }) {
  const { name, email, avatar_id } = payload;

  try {
    yield call(api.post, 'deliverymans', {
      name,
      email,
      avatar_id,
    });

    put(deliverymansSuccess());
    toast.success('Entregador cadastrado com sucesso!');
    history.push('/deliverymans');
  } catch (err) {
    toast.error('Ocorreu um erro ao criar um entregador!');
    put(deliverymansFailure());
  }
}

export function* deliverymansNewUpdate({ payload }) {
  const { id, name, email, avatar_id } = payload;

  try {
    yield call(api.put, `deliverymans/${id}`, {
      name,
      email,
      avatar_id,
    });

    put(deliverymansSuccess());
    toast.success('Entregador cadastrado com sucesso!');
    history.push('/deliverymans');
  } catch (error) {
    yield put(deliverymansFailure());
    toast.error('Ocorreu um erro ao criar um entregador!');
  }
}

export function deliverymansUpdate() {
  history.push('/deliverymans-form-ui');
}

export function* deliverymansDelete({ payload }) {
  const { id } = payload;

  try {
    const { data } = yield call(api.delete, `/deliverymans/${id}`);

    yield put(deliverymansSuccess({ ...data }));
    toast.success('Destinário deletado com sucesso!');
    history.push('/deliverymans');
  } catch (err) {
    yield put(deliverymansFailure());
    toast.error('Ocorreu um erro ao deletar um destinário!');
  }
}

export default all([
  takeLatest('@deliverymans/DELIVERYMANS_CREATE', deliverymansCreate),
  takeLatest('@deliverymans/DELIVERYMANS_NEW_UPDATE', deliverymansNewUpdate),
  takeLatest('@deliverymans/DELIVERYMANS_UPDATE', deliverymansUpdate),
  takeLatest('@deliverymans/DELIVERYMANS_DELETE', deliverymansDelete),
]);
