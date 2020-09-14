import React from 'react';
import pt from 'prop-types';
import { formatMoney } from 'csssr-school-utils';
import { Price, Unit } from './ProductPrice.styled';

const ProductPrice = ({ price, isSubPrice }) => (
  <Price small={isSubPrice}>
    {formatMoney(price, 0, ' ', ' ')}
    <Unit>₽</Unit>
  </Price>
);

ProductPrice.propTypes = {
  price: pt.number.isRequired,
  isSubPrice: pt.bool.isRequired
};

export default ProductPrice;
