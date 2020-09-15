const initialState = {
  products: [],
  min: '',
  minProductPrice: 0,
  max: '',
  maxProductPrice: 0,
  discount: 0,
  categories: [],
  routing: {
    path: '/'
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    case 'SET_MIN_PRODUCT_PRICE':
      return {
        ...state,
        minProductPrice: action.payload
      };
    case 'SET_MAX_PRODUCT_PRICE':
      return {
        ...state,
        maxProductPrice: action.payload
      };
    case 'CHANGE_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      };
    case 'SET_MIN_PRICE_INPUT_VALUE':
      return {
        ...state,
        min: action.payload
      };
    case 'SET_INPUT_VALUE':
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
    case 'RESET_FILTERS':
      const { min, max, discount, categories } = initialState;

      return {
        ...state,
        min,
        max,
        discount,
        categories
      };
    case 'SET_URL':
      return {
        ...state,
        routing: {
          path: action.payload
        }
      };
    default:
      return state;
  }
};

export default reducer;
