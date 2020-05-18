import React from 'react';
import LogRender from '../LogRender';
import s from './InputPrice.module.css';

export default class InputPrice extends LogRender {
  render() {
    const { name, placeholder, value, onInputChange } = this.props;

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
  }
}
