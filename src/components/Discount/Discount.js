import React from 'react';
import DiscountComponent from 'csssr-school-input-discount';
import { FormConsumer } from '../../contexts';

const Discount = ({ title, name, handleInputChange }) => {
  return (
    <FormConsumer>
      {({ discount }) => (
        <DiscountComponent
          title={title}
          name={name}
          value={discount}
          onChange={handleInputChange}
        />
      )}
    </FormConsumer>
  );
};

export default Discount;
