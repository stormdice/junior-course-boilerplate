import React from 'react';
import pt from 'prop-types';
import withInputValidation from '../../HOC/withInputValidation';
import { Input } from './InputNumber.styled';

const InputPrice = ({ name, placeholder, value, onChange }) => (
  <Input
    type="text"
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
  />
);

InputPrice.propTypes = {
  name: pt.string.isRequired,
  placeholder: pt.number.isRequired,
  value: pt.oneOfType([pt.string, pt.number]),
  onChange: pt.func.isRequired
};

export default withInputValidation(InputPrice);
