import cn from 'classnames';
import ProductItem from 'csssr-school-product-card';
import React from 'react';
import ProductPrice from '../ProductPrice';
import style from './ProductsList.module.css';

const renderPrice = (price, isSubPrice = false) => {
  return price ? <ProductPrice price={price} isSubPrice={isSubPrice} /> : '';
};

const ratingComponent = ({ isFilled }) => {
  return <div className={cn(style.star, isFilled && style.starFill)} />;
};

const ProductsList = ({ products }) => {
  const renderProducts = products.map(
    ({
      id,
      isInStock,
      img,
      title,
      price,
      subPriceContent,
      maxRating,
      rating
    }) => {
      return (
        <li key={id}>
          <ProductItem
            isInStock={isInStock}
            img={img}
            title={title}
            price={renderPrice(price)}
            subPriceContent={renderPrice(subPriceContent, true)}
            maxRating={maxRating}
            rating={rating}
            ratingComponent={ratingComponent}
          />
        </li>
      );
    }
  );

  return <ul className={style.productsList}>{renderProducts}</ul>;
};

export default ProductsList;
