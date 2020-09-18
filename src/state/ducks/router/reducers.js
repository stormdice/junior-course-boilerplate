import * as types from './types';

const initialState = {
  path: '/'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_URL:
      return {
        ...state,
        path: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
