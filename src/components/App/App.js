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

const filterByMinAndMaxPrice = ({ price }, min, max) =>
  price >= min && price <= max;

const filterByDiscount = (product, discountPercent) => {
  if (discountPercent > 0) {
    return product.discount === discountPercent;
  }

  return product;
};

const filterByCategory = (product, categories) => {
  const checkedCategories = [...categories];

  if (checkedCategories.length > 0) {
    return checkedCategories.includes(product.category);
  }

  return product;
};

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

  getFilteredProducts(products, min, max, discountPercent, categories) {
    return products.filter(
      product =>
        filterByMinAndMaxPrice(product, min, max) &&
        filterByDiscount(product, discountPercent) &&
        filterByCategory(product, categories)
    );
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
    const { min, max, discount, categories } = this.state;

    return (
      <FormProvider value={this.state}>
        <div className={s.container}>
          <FiltersForm
            handleInputChange={this.getChangeHandlerFor}
            handleCategoryChange={this.getChangeHandlerForCategories}
            handleResetFilters={this.handleResetFilters}
          />
          <Products
            products={this.getFilteredProducts(
              products,
              min,
              max,
              discount,
              categories
            )}
          />
        </div>
      </FormProvider>
    );
  }
}
