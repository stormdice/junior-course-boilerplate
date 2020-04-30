import React from 'react';
import ProductsList from '../ProductsList';
import Title from '../Title';
import s from './Products.module.css';

const Products = ({ products }) => {
  return (
    <div className={s.products}>
      <Title />
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
