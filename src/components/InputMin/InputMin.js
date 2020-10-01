import React from 'react';
import { connect } from 'react-redux';
import InputNumber from '../InputNumber';
import { filterActions, filterSelectors } from '../../store/filter';

const { setInputValue } = filterActions;
const { selectFilterMinValue, selectFilterMinProductPrice } = filterSelectors;

const InputMin = ({ placeholder, value, changeHandler }) => (
  <InputNumber
    name="min"
    placeholder={placeholder}
    value={value}
    changeHandler={changeHandler}
  />
);

const mapStateToProps = state => ({
  value: selectFilterMinValue(state),
  placeholder: selectFilterMinProductPrice(state)
});

const mapDispatchToProps = dispatch => ({
  changeHandler: fieldValue => dispatch(setInputValue('min', fieldValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputMin);
