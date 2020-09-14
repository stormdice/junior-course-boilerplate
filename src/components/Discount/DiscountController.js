import React from 'react';
import { connect } from 'react-redux';
import InputDiscount from '../Inputs/InputDiscount';
import { setInputValue } from '../../store/actions';

const DiscountController = ({ handleInputChange, discount }) => (
  <InputDiscount
    title="Скидка"
    name="discount"
    handleInputChange={handleInputChange}
    discount={discount}
  />
);

const mapStateToProps = ({ discount }) => ({ discount });

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: fieldValue =>
      dispatch(setInputValue('discount', fieldValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountController);
