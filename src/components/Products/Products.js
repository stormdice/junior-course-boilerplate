import React from 'react';
import ProductsList from '../ProductsList';
import Title from '../Title';
import style from './Products.module.css';

const Products = ({ products }) => {
  return (
    <div className={style.products}>
      <Title />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
