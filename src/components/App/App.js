import React, { Component } from 'react';
import { products, price } from '../../products.json';
import Filter from '../Filter';
import Products from '../Products';
import { minBy, maxBy } from 'csssr-school-utils';
import s from './App.module.css';

const DISCOUNT_LIMIT = 100;
const minPrice = minBy(product => product.price, products).price;
const maxPrice = maxBy(product => product.price, products).price;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      min: minPrice,
      max: maxPrice,
      discount: price.discount
    };
  }

  getChangeHandlerFor = fieldName => {
    return fieldValue => {
      if (fieldName === 'min' && fieldValue > this.state.max) {
        return this.state.min;
      }

      if (fieldName === 'discount' && fieldValue > DISCOUNT_LIMIT) {
        return this.state.discount;
      }

      this.setState({ [fieldName]: fieldValue });
    };
  };

  getFilteredProducts(products, min, max, discountPercent) {
    return products
      .filter(product => {
        const price = product.price;

        if (discountPercent !== 0) {
          const discount = product.discount;

          return price >= min && price <= max && discount === discountPercent;
        }

        return price >= min && price <= max;
      })
      .sort((a, b) => a.price - b.price);
  }

  render() {
    const { min, max, discount } = this.state;

    return (
      <div className={s.container}>
        <Filter
          min={min}
          max={max}
          discount={discount}
          handleChange={this.getChangeHandlerFor}
        />
        <Products
          products={this.getFilteredProducts(products, min, max, discount)}
        />
      </div>
    );
  }
}
