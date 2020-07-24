import React from 'react';
import pt from 'prop-types';
import Field from '../Field';
import { InputDiscount } from '../Inputs';

const FieldDiscount = ({ discount, handleInputChange }) => (
  <Field
    input={
      <InputDiscount
        title="Скидка"
        name="discount"
        value={discount}
        handleInputChange={handleInputChange('discount')}
      />
    }
  />
);

FieldDiscount.propTypes = {
  discount: pt.number.isRequired,
  handleInputChange: pt.func.isRequired
};

export default FieldDiscount;
