import { combineReducers } from 'redux';

import categoriesReducer from './containers/GetCategories/reducer';
import categoryReducer from './containers/GetCategory/reducer';

const reducers = combineReducers({
  categories: categoriesReducer,
  category: categoryReducer,
});

export default reducers;
