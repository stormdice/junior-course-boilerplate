import Discount from 'csssr-school-input-discount';
import React from 'react';

const DiscountForm = ({ title, name, value, onInputChange }) => {
  return (
    <Discount
      title={title}
      name={name}
      value={value}
      onChange={onInputChange}
    />
  );
};

export default DiscountForm;
