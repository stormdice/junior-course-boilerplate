import React from 'react';
import s from './InputNumber.module.css';

class InputNumber extends React.Component {
  render() {
    const { name, placeholder, value, priceHandleChange } = this.props;

    return (
      <input
        type="text"
        className={s.input}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={priceHandleChange}
        required
      />
    );
  }
}

export default InputNumber;
