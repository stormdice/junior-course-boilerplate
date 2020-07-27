import React from 'react';
import Discount from 'csssr-school-input-discount';
import { FormConsumer } from '../FormContext';

const DiscountForm = ({ title, name, handleInputChange }) => {
  return (
    <FormConsumer>
      {({ discount }) => (
        <Discount
          title={title}
          name={name}
          value={discount}
          onChange={handleInputChange}
        />
      )}
    </FormConsumer>
  );
};

export default DiscountForm;
