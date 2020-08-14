import React from 'react';
import cn from 'classnames';
import pt from 'prop-types';
import { formatMoney } from 'csssr-school-utils';
import s from './ProductPrice.module.css';

const ProductPrice = ({ price, isSubPrice }) => {
  return (
    <div className={cn([s.price], { [s.small]: isSubPrice })}>
      {formatMoney(price, 0, ' ', ' ')} <span className={s.unit}>&#x20bd;</span>
    </div>
  );
};

ProductPrice.propTypes = {
  price: pt.number.isRequired,
  isSubPrice: pt.bool.isRequired
};

export default ProductPrice;
