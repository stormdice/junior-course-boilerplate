import React from 'react';
import LogRender from '../LogRender';
import ProductsList from '../ProductsList';
import Title from '../Title';
import s from './Products.module.css';

export default class Products extends LogRender {
  render() {
    const { products } = this.props;

    return (
      <div className={s.products}>
        <Title />
        <ProductsList products={products} />
      </div>
    );
  }
}
