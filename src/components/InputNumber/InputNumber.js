import toInt from 'csssr-school-utils/lib/toInt';
import React from 'react';
import s from './InputNumber.module.css';

class InputNumber extends React.Component {
  handleChange = ({ target }) => {
    const value = toInt(target.value);

    this.props.onInputChange(value);
  };

  render() {
    const { name, placeholder, value } = this.props;

    return (
      <input
        type="text"
        className={s.input}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
        required
      />
    );
  }
}

export default InputNumber;
