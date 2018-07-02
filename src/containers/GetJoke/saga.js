import { call, put, takeLatest } from 'redux-saga/effects';
import {
  onError,
  onSuccess,
} from './actions';
import {
  GET_CATEGORY_BEGIN,
} from './constants';

const handleFetch = ({ payload }) => { // eslint-disable-line arrow-body-style
  return fetch(`https://api.chucknorris.io/jokes/random?category=${payload}`)
    .then((response) => response.json())
    .then((category) => category)
    .catch((error) => console.error(error)); // eslint-disable-line no-console
};

function* GetJoke(payload) {
  try {
    const category = yield call(handleFetch, payload);
    yield put(onSuccess(category));
  } catch (error) {
    yield put(onError(error));
  }
}

function* jokeSaga() {
  yield takeLatest(GET_CATEGORY_BEGIN, GetJoke);
}

export default jokeSaga;
