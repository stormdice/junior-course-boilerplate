import React from 'react';
import s from './InputPrice.module.css';

const InputPrice = ({ name, placeholder, value, onInputChange }) => {
  return (
    <input
      type="text"
      className={s.input}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
      required
    />
  );
};

export default InputPrice;
