import * as types from './types';

const initialState = {
  pageNum: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_URL:
      const pageNum = action.payload.searchParams.get('pageNum');

      return {
        pageNum
      };
    default:
      return state;
  }
};

export default reducer;
