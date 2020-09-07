import React from 'react';
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

export default InputPrice;
