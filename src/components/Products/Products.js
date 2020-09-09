import React from 'react';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import Title from '../Title';

const Products = props => {
  const { products } = props;

  return (
    <div>
      <Title />
      <ProductsList products={products} />
      <Pagination />
    </div>
  );
};

export default Products;
