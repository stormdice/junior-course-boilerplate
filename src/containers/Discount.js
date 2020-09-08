import React from 'react';
import { connect } from 'react-redux';
import { InputDiscount } from '../components/Inputs';

const Discount = props => {
  const { handleInputChange, discount } = props;

  return (
    <InputDiscount
      title="Скидка"
      name="discount"
      handleInputChange={handleInputChange}
      discount={discount}
    />
  );
};

const mapStateToProps = ({ discount }) => {
  return { discount };
};

export default connect(mapStateToProps)(Discount);
