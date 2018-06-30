import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
} from './constants';

export const getCategories = () => ({
  type: GET_CATEGORIES_BEGIN,
});

export const onSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { categories },
});

export const onError = (error) => ({
  type: GET_CATEGORIES_FAILURE,
  payload: { error },
});

export default getCategories;
