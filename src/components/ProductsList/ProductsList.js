import React from 'react';
import style from './ProductsList.module.css';
import ProductItem from '../ProductItem/ProductItem';
import ProductItemRating from '../ProductItemRating/ProductItemRating';

function ProductsList({ products }) {
  const productsMarkup = products.map((product) => {
    const {id, ...productProps} = product;

    return (
      <li key={ id }>
        <ProductItem {...productProps} ratingComponent={ProductItemRating} />
      </li>
    );
  });

  return (
    <ul className={style.productsList}>
      { productsMarkup }
    </ul>
  );
};

export default ProductsList;
