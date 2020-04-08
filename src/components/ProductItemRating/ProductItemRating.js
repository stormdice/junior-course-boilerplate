import React from 'react';
import cn from 'classnames';
import style from './ProductItemRating.module.css';

function ItemRating({ isFilled }) {
  return (
    <div className={cn([style.star], {[style.starFill] : isFilled},  {[style.starEmpty] : !isFilled})} />
  )
};

export default ItemRating;
