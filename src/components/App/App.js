import React, { Component } from 'react';
import { productItems } from '../../products.json';
import FiltersForm from '../FiltersForm';
import Products from '../Products';
import { minBy, maxBy } from 'csssr-school-utils';
import { FormProvider } from '../../contexts';
import s from './App.module.css';

const DISCOUNT_LIMIT = 100;

const isProductPriceInRange = ({ price }, min, max) =>
  price >= min && price <= max;

const isProductContainsFilteredDiscount = ({ discount }, discountPercent) =>
  discountPercent === 0 || discount === discountPercent;

const isProductContainsFilteredCategory = ({ category }, categories) =>
  categories.length === 0 || categories.includes(category);

export default class App extends Component {
  state = {
    products: [],
    min: 0,
    max: 0,
    discount: 0,
    categories: []
  };

  componentDidMount() {
    this.parseCategoriesQueryFromUrl();

    window.addEventListener('popstate', this.parseCategoriesQueryFromUrl);

    this.setState({
      products: productItems.sort((a, b) => a.price - b.price),
      min: minBy(product => product.price, productItems).price,
      max: maxBy(product => product.price, productItems).price
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.categories !== this.state.categories) {
      this.addCategoriesQueryToUrl();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.parseCategoriesQueryFromUrl);
  }

  addCategoriesQueryToUrl() {
    const url = new URL(window.location.href);

    url.searchParams.set('categories', this.state.categories);
    window.history.pushState(null, null, url);
  }

  parseCategoriesQueryFromUrl = () => {
    const url = new URL(window.location.href);
    const categories = url.searchParams.get('categories');

    this.setState({
      categories: categories ? categories.split(',') : []
    });
  };

  getChangeHandlerForCategories = fieldName => {
    return isChecked => {
      const uniqueCategories = new Set(this.state.categories);
      const method = isChecked ? 'add' : 'delete';
      uniqueCategories[method](fieldName);

      this.setState({
        categories: [...uniqueCategories]
      });
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

  getFilteredProducts({ products, min, max, discount, categories }) {
    return products.filter(
      product =>
        isProductPriceInRange(product, min, max) &&
        isProductContainsFilteredDiscount(product, discount) &&
        isProductContainsFilteredCategory(product, categories)
    );
  }

  handleResetFilters = () => {
    this.setState({
      min: minBy(product => product.price, this.state.products).price,
      max: maxBy(product => product.price, this.state.products).price,
      discount: 0,
      categories: []
    });
  };

  render() {
    const { products, min, max, discount, categories } = this.state;
    const filteredProducts = this.getFilteredProducts({
      products,
      min,
      max,
      discount,
      categories
    });

    return (
      <FormProvider value={this.state}>
        <div className={s.container}>
          <FiltersForm
            handleInputChange={this.getChangeHandlerFor}
            handleCategoryChange={this.getChangeHandlerForCategories}
            handleResetFilters={this.handleResetFilters}
          />
          <Products products={filteredProducts} />
        </div>
      </FormProvider>
    );
  }
}
