import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { recipientsFailure, recipientsSuccess } from './actions';

export function* recipientsCreate({ payload }) {
  try {
    yield call(api.post, '/recipients', {
      ...payload,
    });

    yield put(recipientsSuccess());
    toast.success('Destinário cadastrado com sucesso!');
    history.push('/recipients');
  } catch (err) {
    yield put(recipientsFailure());
    toast.error('Ocorreu um erro ao criar um destinário!');
  }
}

export function* recipientsNewUpdate({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `/recipients/${id}`, {
      ...data,
    });

    yield put(recipientsSuccess());
    toast.success('Destinário atualizado com sucesso!');
    history.push('/recipients');
  } catch (err) {
    yield put(recipientsFailure());
    toast.error('Ocorreu um erro ao atualizar um destinário!');
  }
}

export function recipientsUpdate() {
  history.push('/recipients-form-ui');
}

export default all([
  takeLatest('@recipients/RECIPIENTS_CREATE', recipientsCreate),
  takeLatest('@recipients/RECIPIENTS_UPDATE', recipientsUpdate),
  takeLatest('@recipients/RECIPIENTS_NEW_UPDATE', recipientsNewUpdate),
]);
