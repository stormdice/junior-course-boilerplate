import React from 'react';
import pt from 'prop-types';
import Field from '../Field';
import PriceRangeForm from '../PriceRangeForm';

const FieldPrice = ({ handleInputChange }) => (
  <Field
    input={
      <PriceRangeForm title="Цена" handleInputChange={handleInputChange} />
    }
  />
);

FieldPrice.propTypes = {
  handleInputChange: pt.func.isRequired
};

export default FieldPrice;
