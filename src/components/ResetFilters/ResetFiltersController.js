import React from 'react';
import { connect } from 'react-redux';
import { filterActions } from '../../store/filter';
import { ResetFilters } from './ResetFilters.styled';

const ResetFiltersController = ({ resetFilters, ...restProps }) => (
  <ResetFilters onClick={resetFilters} {...restProps} />
);

const mapDispatchToProps = {
  resetFilters: filterActions.resetFilters
};

export default connect(null, mapDispatchToProps)(ResetFiltersController);
