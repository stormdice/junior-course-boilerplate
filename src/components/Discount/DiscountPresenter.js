import React from 'react';
import DiscountComponent from 'csssr-school-input-discount';

const DiscountPresenter = ({ title, name, handleInputChange, discount }) => (
  <DiscountComponent
    title={title}
    name={name}
    value={discount}
    onChange={handleInputChange}
  />
);

export default DiscountPresenter;
