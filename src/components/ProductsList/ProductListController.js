import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productItems } from '../../products.json';
import {
  getProducts,
  setMinProductPrice,
  setMaxProductPrice
} from '../../state/ducks/filter/actions';
import ProductListPresenter from './ProductsListPresenter';
import { minBy, maxBy } from 'csssr-school-utils';

const isProductPriceInRange = (product, min, max) =>
  max === ''
    ? product.price >= min
    : product.price >= min && product.price <= max;

const isProductContainsFilteredDiscount = ({ discount }, discountPercent) =>
  discountPercent === 0 ||
  discountPercent === '' ||
  discount === discountPercent;

const isProductContainsFilteredCategory = ({ category }, categories) =>
  categories.length === 0 || categories.includes(category);

class ProductsController extends Component {
  getFilteredProducts({ products, min, max, discount, categories }) {
    return products.filter(
      product =>
        isProductPriceInRange(product, min, max) &&
        isProductContainsFilteredDiscount(product, discount) &&
        isProductContainsFilteredCategory(product, categories)
    );
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.setMinProductPrice();
    this.props.setMaxProductPrice();
  }

  render() {
    const sortedProducts = [...this.props.products].sort(
      (a, b) => a.price - b.price
    );

    return (
      <ProductListPresenter
        products={this.getFilteredProducts({
          products: sortedProducts,
          min: this.props.min,
          max: this.props.max,
          discount: this.props.discount,
          categories: this.props.categories
        })}
      />
    );
  }
}

const mapStateToProps = ({
  filter: {
    products,
    setMinProductPrice,
    setMaxProductPrice,
    min,
    max,
    discount,
    categories
  }
}) => {
  return {
    products,
    setMinProductPrice,
    setMaxProductPrice,
    min,
    max,
    discount,
    categories
  };
};

const mapDispatchToProps = dispatch => {
  const minPrice = minBy(product => product.price, productItems).price;
  const maxPrice = maxBy(product => product.price, productItems).price;

  return {
    getProducts: () => dispatch(getProducts(productItems)),
    setMinProductPrice: () => dispatch(setMinProductPrice(minPrice)),
    setMaxProductPrice: () => dispatch(setMaxProductPrice(maxPrice))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsController);
