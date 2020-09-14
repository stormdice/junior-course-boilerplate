import React from 'react';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import AppTitle from '../AppTitle';

const Products = () => (
  <div>
    <AppTitle />
    <ProductsList />
    <Pagination />
  </div>
);

export default Products;
