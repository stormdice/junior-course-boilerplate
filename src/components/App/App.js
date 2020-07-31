import React, { Component } from 'react';
import { products, price, labels } from '../../products.json';
import FiltersForm from '../FiltersForm';
import Products from '../Products';
import { minBy, maxBy } from 'csssr-school-utils';
import { FormProvider } from '../../contexts';
import s from './App.module.css';

const DISCOUNT_LIMIT = 100;
const minPrice = minBy(product => product.price, products).price;
const maxPrice = maxBy(product => product.price, products).price;

const setMinAndMaxPrice = (price, min, max) => price >= min && price <= max;

const hasDiscount = (discount, discountPercent) => discount === discountPercent;

const setMinAndMaxPriceAndHasDiscount = ({
  price,
  min,
  max,
  discount,
  discountPercent
}) =>
  setMinAndMaxPrice(price, min, max) && hasDiscount(discount, discountPercent);

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
        return setMinAndMaxPriceAndHasDiscount({
          price,
          min,
          max,
          discount,
          discountPercent
        });
      }

      if (checkedProducts.length > 0) {
        return checkedProducts.includes(category);
      }

      return setMinAndMaxPrice(price, min, max);
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
    const { min, max, discount } = this.state;

    return (
      <FormProvider value={this.state}>
        <div className={s.container}>
          <FiltersForm
            handleInputChange={this.getChangeHandlerFor}
            categoryLabels={labels}
            handleCategoryChange={this.handleCategoryChange}
            handleResetFilters={this.handleResetFilters}
          />
          <Products
            products={this.getFilteredProducts(products, min, max, discount)}
          />
        </div>
      </FormProvider>
    );
  }
}
