import {
  GET_CATEGORY_BEGIN,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
} from './constants';

const initialState = {
  category: {},
  error: null,
  loading: false,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_BEGIN:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload.category,
        loading: false,
      };
    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        category: {},
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
}
