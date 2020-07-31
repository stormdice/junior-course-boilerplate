import React from 'react';
import pt from 'prop-types';
import s from './ResetFilters.module.css';

const ResetFilters = ({ handleResetFilters }) => (
  <button className={s.reset} type="button" onClick={handleResetFilters}>
    Сбросить фильтры
  </button>
);

ResetFilters.propTypes = {
  handleResetFilters: pt.func.isRequired
};

export default ResetFilters;
