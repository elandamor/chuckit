import categoriesReducer from './containers/GetCategories/reducer';

const reducers = combineReducers({
  categories: categoriesReducer,
});

export default reducers;
