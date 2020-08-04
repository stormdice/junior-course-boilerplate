import React, { Component } from 'react';
import { productItems } from '../../products.json';
import FiltersForm from '../FiltersForm';
import Products from '../Products';
import { minBy, maxBy } from 'csssr-school-utils';
import { FormProvider } from '../../contexts';
import s from './App.module.css';

const DISCOUNT_LIMIT = 100;

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
    products: [],
    min: 0,
    max: 0,
    discount: 0,
    categories: new Set()
  };

  componentDidMount() {
    this.setState({
      products: productItems.sort((a, b) => a.price - b.price),
      min: minBy(product => product.price, productItems).price,
      max: maxBy(product => product.price, productItems).price
    });
  }

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
    this.setState(prevState => {
      prevState.categories.clear();

      return {
        min: minBy(product => product.price, this.state.products).price,
        max: maxBy(product => product.price, this.state.products).price,
        discount: 0,
        categories: prevState.categories
      };
    });
  };

  render() {
    const { products, min, max, discount, categories } = this.state;

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
