import React from 'react';
import pt from 'prop-types';
import { Input } from './InputPrice.styled';

const InputPrice = ({ name, placeholder, value, handleInputChange }) => (
  <Input
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={handleInputChange}
    required
  />
);

InputPrice.propTypes = {
  name: pt.string.isRequired,
  placeholder: pt.number.isRequired,
  value: pt.oneOfType([pt.string, pt.number]),
  handleInputChange: pt.func.isRequired
};

export default InputPrice;
