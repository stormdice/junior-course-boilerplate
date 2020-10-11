import * as types from './types';

export const pushState = path => {
  const url = new URL(window.location.href);
  const paramKeyRegExp = /[a-zA-Z]+/;
  const paramValueRegExp = /([0-9]+)/;
  const paramKey = path.match(paramKeyRegExp)[0];
  const paramValue = path.match(paramValueRegExp)[0];

  url.searchParams.set(paramKey, paramValue);
  window.history.pushState({}, 'params', url);

  return {
    type: types.SET_URL,
    payload: `${paramKey}=${paramValue}`
  };
};
