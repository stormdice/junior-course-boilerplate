import React, { Component } from 'react';
import { products, price, labels } from '../../products.json';
import Filter from '../Filter';
import Products from '../Products';
import { minBy, maxBy } from 'csssr-school-utils';
import s from './App.module.css';

const DISCOUNT_LIMIT = 100;
const minPrice = minBy(product => product.price, products).price;
const maxPrice = maxBy(product => product.price, products).price;

/**
 * Проверяет валидность цен
 * @param {number} price - цена введённая пользователем
 * @param {number} min - минимальная цена
 * @param {number} max - максимальаня цена
 * @returns {boolean}
 */
const isPriceValid = (price, min, max) => price >= min && price <= max;

/**
 * Проверяет наличие скидки
 * @param {number} discount
 * @param {number} discountPercent
 * @returns {boolean}
 */
const hasDiscount = (discount, discountPercent) => discount === discountPercent;

const isPriceAndDiscountValid = (price, min, max, discount, discountPercent) =>
  isPriceValid(price, min, max) && hasDiscount(discount, discountPercent);

export default class App extends Component {
  state = {
    min: minPrice,
    max: maxPrice,
    discount: price.discount
  };

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
      .filter(({ price, discount }) =>
        discountPercent > 0
          ? isPriceAndDiscountValid(price, min, max, discount, discountPercent)
          : isPriceValid(price, min, max)
      )
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
          categoryLabels={labels}
        />
        <Products
          products={this.getFilteredProducts(products, min, max, discount)}
        />
      </div>
    );
  }
}
