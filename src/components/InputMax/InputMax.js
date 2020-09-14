import { connect } from 'react-redux';
import React from 'react';
import InputNumber from '../InputNumber';
import { setInputValue } from '../../store/actions';

const InputMax = ({ placeholder, value, changeHandler }) => (
  <InputNumber
    name="max"
    placeholder={placeholder}
    value={value}
    changeHandler={changeHandler}
  />
);

const mapStateToProps = ({ max, maxProductPrice }) => {
  return {
    value: max,
    placeholder: maxProductPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: fieldValue => dispatch(setInputValue('max', fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMax);
