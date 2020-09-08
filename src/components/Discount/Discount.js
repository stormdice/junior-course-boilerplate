import React from 'react';
import DiscountComponent from 'csssr-school-input-discount';

const Discount = props => {
  const { title, name, handleInputChange, discount } = props;

  return (
    <DiscountComponent
      title={title}
      name={name}
      value={discount}
      onChange={handleInputChange}
    />
  );
};

export default Discount;
