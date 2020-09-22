import * as types from './types';

export const getProducts = products => {
  return {
    type: types.GET_PRODUCTS,
    payload: products
  };
};

export const setMinProductPrice = price => {
  return {
    type: types.SET_MIN_PRODUCT_PRICE,
    payload: price
  };
};

export const setMaxProductPrice = price => {
  return {
    type: types.SET_MAX_PRODUCT_PRICE,
    payload: price
  };
};

export const changeCategory = categories => {
  return {
    type: types.CHANGE_CATEGORIES,
    payload: categories
  };
};

export const setInputValue = (fieldName, fieldValue) => {
  return {
    type: types.SET_INPUT_VALUE,
    payload: {
      fieldName,
      fieldValue
    }
  };
};

export const resetFilters = () => {
  return {
    type: types.RESET_FILTERS
  };
};

export const setCategoriesQueryFromUrl = categories => {
  return {
    type: types.SET_CATEGORIES_QUERY_FROM_URL,
    payload: categories
  };
};
