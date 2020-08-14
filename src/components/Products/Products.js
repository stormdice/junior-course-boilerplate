import React from 'react';
import pt from 'prop-types';
import LogRender from '../LogRender';
import ProductsList from '../ProductsList';
import Pagination from '../Pagination';
import Title from '../Title';
import s from './Products.module.css';

export default class Products extends LogRender {
  render() {
    const { products } = this.props;

    return (
      <div className={s.products}>
        <Title />
        <ProductsList products={products} />
        <Pagination />
      </div>
    );
  }
}

Products.propTypes = {
  products: pt.array.isRequired
};
