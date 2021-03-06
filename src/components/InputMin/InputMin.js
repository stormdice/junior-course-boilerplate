import React from 'react';
import { connect } from 'react-redux';
import InputNumber from '../InputNumber';
import { setInputValue } from '../../store/actions';

const InputMin = ({ placeholder, value, changeHandler }) => (
  <InputNumber
    name="min"
    placeholder={placeholder}
    value={value}
    changeHandler={changeHandler}
  />
);

const mapStateToProps = ({ min, minProductPrice }) => {
  return {
    value: min,
    placeholder: minProductPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: fieldValue => dispatch(setInputValue('min', fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMin);
