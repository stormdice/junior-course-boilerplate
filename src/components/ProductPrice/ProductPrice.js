import React from 'react';
import cn from 'classnames';
import { formatMoney } from 'csssr-school-utils';
import style from './ProductPrice.module.css';

const ProductPrice = ({ price, isSubPrice }) => {
  return (
    <div className={cn([style.productPrice], {[style.subPrice]: isSubPrice})}>
      {formatMoney(price, 0, ' ', ' ')} <span>&#x20bd;</span>
    </div>
  )
};

export default ProductPrice;
