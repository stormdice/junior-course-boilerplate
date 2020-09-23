import * as types from './types';

export const pushState = url => {
  window.history.pushState({}, 'pageNum', url);

  return {
    type: types.SET_URL,
    payload: url
  };
};
