export const selectFilter = state => state.filter;

export const selectFilterCategories = state => selectFilter(state).categories;

export const selectFilterDiscount = state => selectFilter(state).discount;

export const selectFilterMinValue = state => selectFilter(state).min;

export const selectFilterMinProductPrice = state =>
  selectFilter(state).minProductPrice;

export const selectFilterMaxValue = state => selectFilter(state).max;

export const selectFilterMaxProductPrice = state =>
  selectFilter(state).maxProductPrice;
