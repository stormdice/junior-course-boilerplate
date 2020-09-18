import * as types from './types';

const initialState = {
  products: [],
  min: '',
  minProductPrice: 0,
  max: '',
  maxProductPrice: 0,
  discount: 0,
  categories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case types.SET_MIN_PRODUCT_PRICE:
      return {
        ...state,
        minProductPrice: action.payload
      };
    case types.SET_MAX_PRODUCT_PRICE:
      return {
        ...state,
        maxProductPrice: action.payload
      };
    case types.CHANGE_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case types.SET_INPUT_VALUE:
      const { fieldName, fieldValue } = action.payload;

      if (fieldName === 'min' && fieldValue > state.maxProductPrice) {
        return state;
      }

      if (fieldName === 'discount' && fieldValue > 100) {
        return state;
      }

      return {
        ...state,
        [fieldName]: fieldValue
      };
    case types.RESET_FILTERS:
      const { min, max, discount, categories } = initialState;

      return {
        ...state,
        min,
        max,
        discount,
        categories
      };
    default:
      return state;
  }
};

export default reducer;
