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
    .catch((error) => console.error(error));
}

function* getCategory(payload) {
  try {
    const category = yield call(handleFetch, payload);
    yield put(onSuccess(category));
  } catch (error) {
    yield put(onError(error));
  }
}

function* categorySaga() {
  yield takeLatest(GET_CATEGORY_BEGIN, getCategory);
}

export default categorySaga;
