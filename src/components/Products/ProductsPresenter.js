import React from 'react';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import AppTitle from '../AppTitle';

const Products = ({ products }) => (
  <div>
    <AppTitle />
    <ProductsList products={products} />
    <Pagination />
  </div>
);

export default Products;
