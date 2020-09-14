import React from 'react';
import Discount from 'csssr-school-input-discount';
import withInputValidation from '../../HOC/withInputValidation';

const DiscountPresenter = ({ title, name, onChange, discount }) => (
  <Discount title={title} name={name} value={discount} onChange={onChange} />
);

export default withInputValidation(DiscountPresenter);
