import React from 'react';
import { connect } from 'react-redux';
import DiscountPresenter from './DiscountPresenter';
import { filterActions } from '../../store/filter';

const DiscountController = ({ changeHandler, discount }) => (
  <DiscountPresenter
    title="Скидка"
    name="discount"
    changeHandler={changeHandler}
    discount={discount}
  />
);

const mapStateToProps = ({ filter: { discount } }) => ({ discount });

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: fieldValue =>
      dispatch(filterActions.setInputValue('discount', fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountController);
