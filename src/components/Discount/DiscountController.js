import React from 'react';
import { connect } from 'react-redux';
import DiscountPresenter from './DiscountPresenter';
import { filterActions, filterSelectors } from '../../store/filter';

const { setInputValue } = filterActions;
const { selectFilterDiscount } = filterSelectors;

const DiscountController = ({ changeHandler, discount }) => (
  <DiscountPresenter
    title="Скидка"
    name="discount"
    changeHandler={changeHandler}
    discount={discount}
  />
);

const mapStateToProps = state => ({
  discount: selectFilterDiscount(state)
});

const mapDispatchToProps = dispatch => ({
  changeHandler: fieldValue => dispatch(setInputValue('discount', fieldValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscountController);
