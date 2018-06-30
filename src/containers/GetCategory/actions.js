import {
  GET_CATEGORY_BEGIN,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS,
} from './constants';

export const getCategory = (payload) => ({
  type: GET_CATEGORY_BEGIN,
  payload,
});

export const onSuccess = (category) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: { category },
});

export const onError = (error) => ({
  type: GET_CATEGORY_FAILURE,
  payload: { error },
});

export default getCategory;
