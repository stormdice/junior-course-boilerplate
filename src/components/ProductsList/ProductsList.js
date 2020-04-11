import React from 'react';
import ProductItem from 'csssr-school-product-card';
import cn from 'classnames';
import style from './ProductsList.module.css';
import ProductPrice from '../ProductPrice/ProductPrice';

const renderPrice = (price, isSubPrice = false) => {
  return price ? <ProductPrice price={price} isSubPrice={isSubPrice} /> : '';
}

const ratingComponent = ({ isFilled }) => {
  return <div className={cn([style.star], {[style.starFill]: isFilled})} />;
};

const ProductsList = ({ products }) => {
  const renderProducts = products.map((
    {
      id,
      isInStock,
      img,
      title,
      price,
      subPriceContent,
      maxRating,
      rating
    }
  ) => {

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
  });

  return (
    <ul className={style.productsList}>
      { renderProducts }
    </ul>
  );
};

export default ProductsList;
