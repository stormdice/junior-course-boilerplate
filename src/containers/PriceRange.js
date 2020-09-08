import React from 'react';
import { connect } from 'react-redux';
import PriceRangeView from '../components/PriceRange';

const PriceRange = ({
  handleInputChange,
  min,
  max,
  minProductPrice,
  maxProductPrice
}) => {
  return (
    <PriceRangeView
      handleInputChange={handleInputChange}
      min={min}
      max={max}
      minProductPrice={minProductPrice}
      maxProductPrice={maxProductPrice}
    />
  );
};

const mapStateToProps = ({ min, max, minProductPrice, maxProductPrice }) => {
  return {
    min,
    max,
    minProductPrice,
    maxProductPrice
  };
};

export default connect(mapStateToProps)(PriceRange);
