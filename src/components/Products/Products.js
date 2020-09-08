import React from 'react';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import Title from '../Title';
import s from './Products.module.css';

const Products = props => {
  const { products } = props;

  return (
    <div className={s.products}>
      <Title />
      <ProductsList products={products} />
      <Pagination />
    </div>
  );
};

export default Products;
