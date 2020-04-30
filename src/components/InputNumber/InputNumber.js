import toInt from 'csssr-school-utils/lib/toInt';
import React from 'react';
import s from './InputNumber.module.css';

class InputNumber extends React.Component {
  handleChange = event => {
    const value = toInt(event.target.value);

    this.props.onInputChange(value);
  };

  render() {
    const { name, placeholder, value, maxLength } = this.props;

    return (
      <input
        type="text"
        className={s.input}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={this.handleChange}
        required
      />
    );
  }
}

export default InputNumber;
