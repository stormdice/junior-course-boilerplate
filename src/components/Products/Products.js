import React from 'react';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import AppTitle from '../AppTitle';
import Route from '../../Route';

const Products = () => (
  <div>
    <AppTitle />
    <ProductsList />
    <Route path="page=1">
      <p>товары первой страницы</p>
    </Route>
    <Route path="page=2">
      <p>товары второй страницы</p>
    </Route>
    <Pagination />
  </div>
);

export default Products;
