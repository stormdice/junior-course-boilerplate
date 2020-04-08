import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import style from './ProductItem.module.css';
import ProductItemRating from '../ProductItemRating/ProductItemRating';

const DEFAULT_PRICE = '23 000';
const MAX_RATING = 5;

const range = to => [...Array(to).keys()].map(i => i + 1);

function createPriceContent(price) {
  const priceElement = (
    <>
      {price} <span className={style.goodsPriceUnit}>&#x20bd;</span>
    </>
  );

  return price ? priceElement : '';
}

function createSubPriceContent(subPrice) {
  const subPriceElement = (
    <span className={style.goodsSubPrice}>
      {subPrice} &#x20bd;
    </span>
  );

  return subPrice ? subPriceElement : '';
}

function ProductItem({ isInStock, img, title, price, subPriceContent, maxRating, rating, ratingComponent }) {
  return (
    <article className={cn(style.goods, { [style.goodsNone]: !isInStock })}>
      <div className={cn(style.goodsType, { [style.goodsTypeNone]: !isInStock })}>
        {isInStock ? 'В наличии' : 'Недоступен'}
      </div>
      <img
        className={cn(style.goodsImg, { [style.goodsImgNone]: !isInStock })}
        src={img}
        alt="placeholder"
        width="224"
        height="200"
      />
      <h2 className={style.goodsName}>{title}</h2>
      <div className={style.goodsRating}>
        {range(maxRating).map((i) => React.createElement(ratingComponent, { key: i, isFilled:  i <= rating }))}
      </div>
      <div className={style.goodsPrise}>
        {createPriceContent(price)}{createSubPriceContent(subPriceContent)}
      </div>
    </article>
  );
};

ProductItem.propTypes = {
  title: pt.node.isRequired,
  img: pt.string.isRequired,
  price: pt.node.isRequired,
  rating: pt.number.isRequired,
  maxRating: pt.number.isRequired,
  subPriceContent: pt.node.isRequired,
  ratingComponent: pt.func.isRequired,
  isInStock: pt.bool.isRequired
};

ProductItem.defaultProps = {
  isInStock: true,
  img: '',
  price: DEFAULT_PRICE,
  subPriceContent: '',
  maxRating: MAX_RATING,
  rating: 0,
  ratingComponent: ProductItemRating
};

export default ProductItem;
