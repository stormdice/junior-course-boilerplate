import * as types from './types';

const initialState = {
  route: 'page=1'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_URL:
      return {
        route: `${action.payload}`
      };
    default:
      return state;
  }
};

export default reducer;
