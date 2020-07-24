import React from 'react';
import pt from 'prop-types';
import s from './ResetFilters.module.css';

const ResetFilters = ({ onClick }) => (
  <button className={s.reset} type="button" onClick={onClick}>
    Сбросить фильтры
  </button>
);

ResetFilters.propTypes = {
  onClick: pt.func.isRequired
};

export default ResetFilters;
