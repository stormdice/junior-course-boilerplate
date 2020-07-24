import React from 'react';
import pt from 'prop-types';
import Field from '../Field';
import PriceRangeForm from '../PriceRangeForm';

const FieldPrice = ({ min, max, handleInputChange }) => (
  <Field
    input={
      <PriceRangeForm
        title="Цена"
        min={min}
        max={max}
        handleInputChange={handleInputChange}
      />
    }
  />
);

FieldPrice.propTypes = {
  min: pt.number.isRequired,
  max: pt.number.isRequired,
  handleInputChange: pt.func.isRequired
};

export default FieldPrice;
