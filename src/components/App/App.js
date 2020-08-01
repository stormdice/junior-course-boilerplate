import React, { Component } from 'react';
import { products } from '../../products.json';
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
    discount: 0,
    categories: new Set()
  };

  getChangeHandlerForCategories = fieldname => {
    return isChecked => {
      if (isChecked) {
        return this.setState(prevState => ({
          categories: prevState.categories.add(fieldname)
        }));
      }

      if (!isChecked && this.state.categories.has(fieldname)) {
        return this.setState(prevState => {
          prevState.categories.delete(fieldname);

          return { categories: prevState.categories };
        });
      }
    };
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
    const checkedProducts = [...this.state.categories];

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
      discount: 0,
      categories: new Set()
    });
  };

  render() {
    const { min, max, discount } = this.state;

    return (
      <FormProvider value={this.state}>
        <div className={s.container}>
          <FiltersForm
            handleInputChange={this.getChangeHandlerFor}
            handleCategoryChange={this.getChangeHandlerForCategories}
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
