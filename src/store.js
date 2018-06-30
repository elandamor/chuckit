import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import categoriesSaga from './containers/GetCategories/saga';
import categorySaga from './containers/GetCategory/saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(categoriesSaga);
sagaMiddleware.run(categorySaga);

export default configureStore;
