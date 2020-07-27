import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';
import ProductItem from 'csssr-school-product-card';
import ProductPrice from '../ProductPrice';
import s from './ProductsList.module.css';

const renderPrice = (price, isSubPrice = false) => {
  return price ? <ProductPrice price={price} isSubPrice={isSubPrice} /> : '';
};

const ratingComponent = ({ isFilled }) => {
  return <div className={cn(s.star, isFilled && s.fill)} />;
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

  return <ul className={s.products}>{renderProducts}</ul>;
};

ProductsList.propTypes = {
  products: pt.array.isRequired
};

export default ProductsList;
