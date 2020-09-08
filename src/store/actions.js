const getProducts = products => {
  return {
    type: 'GET_PRODUCTS',
    payload: products
  };
};

const setMinProductPrice = price => {
  return {
    type: 'SET_MIN_PRODUCT_PRICE',
    payload: price
  };
};

const setMaxProductPrice = price => {
  return {
    type: 'SET_MAX_PRODUCT_PRICE',
    payload: price
  };
};

const changeCategory = categories => {
  return {
    type: 'CHANGE_CATEGORIES',
    payload: categories
  };
};

const resetFilters = () => {
  return {
    type: 'RESET_FILTERS'
  };
};

export {
  getProducts,
  setMinProductPrice,
  setMaxProductPrice,
  changeCategory,
  resetFilters
};
