import React from 'react';
import cn from 'classnames';
import pt from 'prop-types';
import { formatMoney } from 'csssr-school-utils';
import s from './ProductPrice.module.css';

const ProductPrice = props => {
  const { price, isSubPrice } = props;
  const unit = '₽';

  return (
    <div className={cn([s.price], { [s.small]: isSubPrice })}>
      {formatMoney(price, 0, ' ', ' ')} <span className={s.unit}>{unit}</span>
    </div>
  );
};

ProductPrice.propTypes = {
  price: pt.number.isRequired,
  isSubPrice: pt.bool.isRequired
};

export default ProductPrice;
