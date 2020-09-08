import React from 'react';
import pt from 'prop-types';
import s from './ResetFilters.module.css';

const ResetFilters = ({ handleClick }) => (
  <button className={s.reset} type="button" onClick={handleClick}>
    Сбросить фильтры
  </button>
);

ResetFilters.propTypes = {
  handleClick: pt.func.isRequired
};

export default ResetFilters;
