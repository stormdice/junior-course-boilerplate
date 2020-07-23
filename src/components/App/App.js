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
    discount: price.discount,
    categories: {
      clothes: false,
      books: false
    }
  };

  handleCategoryChange = e => {
    const { name } = e.target;

    this.setState(prevState => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name]
        }
      };
    });
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
    const checkedProducts = Object.entries(this.state.categories)
      .filter(category => category[1])
      .map(category => category[0]);

    return products.filter(({ price, discount, category }) => {
      if (discountPercent > 0) {
        return isPriceAndDiscountValid(
          price,
          min,
          max,
          discount,
          discountPercent
        );
      }

      if (checkedProducts.length > 0) {
        return checkedProducts.includes(category);
      }

      return isPriceValid(price, min, max);
    });
  }

  handleResetFilters = () => {
    this.setState({
      min: minPrice,
      max: maxPrice,
      discount: price.discount,
      categories: {
        clothes: false,
        books: false
      }
    });
  };

  render() {
    const { min, max, discount, categories } = this.state;

    return (
      <div className={s.container}>
        <Filter
          min={min}
          max={max}
          discount={discount}
          handleInputChange={this.getChangeHandlerFor}
          categoryLabels={labels}
          categories={categories}
          handleCategoryChange={this.handleCategoryChange}
          handleResetFilters={this.handleResetFilters}
        />
        <Products
          products={this.getFilteredProducts(products, min, max, discount)}
        />
      </div>
    );
  }
}
