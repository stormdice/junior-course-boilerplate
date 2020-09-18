import * as types from './types';

export const pushState = url => {
  window.history.pushState({}, `page + ${url}`, `${url}`);

  return {
    type: types.SET_URL,
    payload: url
  };
};
