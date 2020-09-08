import React from 'react';
import { connect } from 'react-redux';
import { resetFilters } from '../store/actions';
import ResetFiltersView from '../components/ResetFilters';

const ResetFilters = ({ resetFilters }) => {
  return <ResetFiltersView handleClick={() => resetFilters()} />;
};

const mapStateToProps = ({ min, max, discount, categories }) => {
  return {
    min,
    max,
    discount,
    categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetFilters: () => dispatch(resetFilters())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetFilters);
