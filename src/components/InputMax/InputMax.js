import { connect } from 'react-redux';
import React from 'react';
import InputNumber from '../InputNumber';
import { filterActions, filterSelectors } from '../../store/filter';

const { setInputValue } = filterActions;
const { selectFilterMaxValue, selectFilterMaxProductPrice } = filterSelectors;

const InputMax = ({ placeholder, value, changeHandler }) => (
  <InputNumber
    name="max"
    placeholder={placeholder}
    value={value}
    changeHandler={changeHandler}
  />
);

const mapStateToProps = state => ({
  value: selectFilterMaxValue(state),
  placeholder: selectFilterMaxProductPrice(state)
});

const mapDispatchToProps = dispatch => ({
  changeHandler: fieldValue => dispatch(setInputValue('max', fieldValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(InputMax);
