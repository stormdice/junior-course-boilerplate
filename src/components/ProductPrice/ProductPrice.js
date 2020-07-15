import cn from 'classnames';
import { formatMoney } from 'csssr-school-utils';
import React from 'react';
import s from './ProductPrice.module.css';

const ProductPrice = ({ price, isSubPrice }) => {
  return (
    <div className={cn([s.price], { [s.small]: isSubPrice })}>
      {formatMoney(price, 0, ' ', ' ')} <span className={s.unit}>&#x20bd;</span>
    </div>
  );
};

export default ProductPrice;
