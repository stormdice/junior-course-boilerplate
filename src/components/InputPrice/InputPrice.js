import React from 'react';
import pt from 'prop-types';
import LogRender from '../LogRender';
import s from './InputPrice.module.css';

export default class InputPrice extends LogRender {
  render() {
    const { name, placeholder, value, handleInputChange } = this.props;

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
  }
}

InputPrice.propTypes = {
  name: pt.string.isRequired,
  placeholder: pt.number.isRequired,
  value: pt.number.isRequired,
  handleInputChange: pt.func.isRequired
};
