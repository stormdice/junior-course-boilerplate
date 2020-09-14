import React from 'react';
import { connect } from 'react-redux';
import DiscountPresenter from './DiscountPresenter';
import { setInputValue } from '../../store/actions';

const DiscountController = ({ changeHandler, discount }) => (
  <DiscountPresenter
    title="Скидка"
    name="discount"
    changeHandler={changeHandler}
    discount={discount}
  />
);

const mapStateToProps = ({ discount }) => ({ discount });

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: fieldValue => dispatch(setInputValue('discount', fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountController);
