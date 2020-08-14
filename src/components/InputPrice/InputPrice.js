import React from 'react';
import pt from 'prop-types';
import s from './InputPrice.module.css';

const InputPrice = ({ name, placeholder, value, handleInputChange }) => {
  return (
    <input
      type="text"
      className={s.input}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      required
    />
  );
};

InputPrice.propTypes = {
  name: pt.string.isRequired,
  placeholder: pt.number.isRequired,
  value: pt.number.isRequired,
  handleInputChange: pt.func.isRequired
};

export default InputPrice;
