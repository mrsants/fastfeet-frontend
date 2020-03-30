import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { recipientsFailure, recipientsSuccess } from './actions';

export function* recipientsCreate({ payload }) {
  const { data } = payload;
  try {
    yield call(api.post, 'recipients', {});
    api.post('/recipient', {
      ...data,
    });

    yield put(recipientsSuccess());
    toast.success('Destinário cadastro com sucesso!');
    history.push('/recipient');
  } catch (err) {
    yield put(recipientsFailure());
    toast.error('Ocorreu um erro ao criar um destinário!');
  }
}

export default all([
  takeLatest('@recipients/RECIPIENTS_CREATE', recipientsCreate),
]);
