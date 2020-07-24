import React from 'react';
import pt from 'prop-types';
import Field from '../Field';
import { InputDiscount } from '../Inputs';

const FieldDiscount = ({ handleInputChange }) => (
  <Field
    input={
      <InputDiscount
        title="Скидка"
        name="discount"
        handleInputChange={handleInputChange('discount')}
      />
    }
  />
);

FieldDiscount.propTypes = {
  handleInputChange: pt.func.isRequired
};

export default FieldDiscount;
