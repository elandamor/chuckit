import { call, put, takeLatest } from 'redux-saga/effects';
import {
  onError,
  onSuccess,
} from './actions';
import {
  GET_CATEGORIES_BEGIN,
} from './constants';

const handleFetch = () => { // eslint-disable-line arrow-body-style
  return fetch('https://api.chucknorris.io/jokes/categories')
    .then((response) => response.json())
    .then((categories) => categories)
    .catch((error) => console.error(error)); // eslint-disable-line no-console
};

function* getCategories() {
  try {
    const categories = yield call(handleFetch);
    yield put(onSuccess(categories));
  } catch (error) {
    yield put(onError(error));
  }
}

function* categoriesSaga() {
  yield takeLatest(GET_CATEGORIES_BEGIN, getCategories);
}

export default categoriesSaga;
