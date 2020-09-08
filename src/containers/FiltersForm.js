import React from 'react';
import { connect } from 'react-redux';
import FiltersFormView from '../components/FiltersForm';

const DISCOUNT_LIMIT = 100;

const FiltersForm = ({
  min,
  max,
  minProductPrice,
  maxProductPrice,
  discount
}) => {
  const getChangeHandlerFor = fieldName => {
    return fieldValue => {
      if (fieldName === 'min' && fieldValue > maxProductPrice) {
        return;
      }

      if (fieldName === 'discount' && fieldValue > DISCOUNT_LIMIT) {
        return discount;
      }

      this.setState({ [fieldName]: fieldValue });
    };
  };

  return (
    <FiltersFormView
      handleInputChange={() => {}}
      min={min}
      max={max}
      minProductPrice={minProductPrice}
      maxProductPrice={maxProductPrice}
    />
  );
};

const mapStateToProps = ({
  min,
  max,
  minProductPrice,
  maxProductPrice,
  discount
}) => {
  return {
    min,
    max,
    minProductPrice,
    maxProductPrice,
    discount
  };
};

export default connect(mapStateToProps)(FiltersForm);
