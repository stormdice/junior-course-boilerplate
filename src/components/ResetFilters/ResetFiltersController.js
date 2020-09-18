import React from 'react';
import { connect } from 'react-redux';
import { resetFilters } from '../../state/ducks/filter/actions';
import { ResetFilters } from './ResetFilters.styled';

const ResetFiltersController = ({ resetFilters, ...restProps }) => (
  <ResetFilters onClick={resetFilters} {...restProps} />
);

const mapDispatchToProps = {
  resetFilters
};

export default connect(null, mapDispatchToProps)(ResetFiltersController);
