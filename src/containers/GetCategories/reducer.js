import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
} from './constants';

const initialState = {
  error: null,
  items: [],
  loading: false,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.categories,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
}
