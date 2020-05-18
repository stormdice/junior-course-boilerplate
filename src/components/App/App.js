import React from 'react';
import { products, price } from '../../products.json';
import Filter from '../Filter';
import LogRender from '../LogRender';
import Products from '../Products';
import { minBy, maxBy } from 'csssr-school-utils';
import s from './App.module.css';

const minPrice = minBy(product => product.price, products).price;
const maxPrice = maxBy(product => product.price, products).price;

class App extends LogRender {
  constructor(props) {
    super(props);

    this.state = {
      from: minPrice,
      before: maxPrice,
      discount: price.discount
    };
  }

  getChangeHandlerFor = fieldName => {
    return fieldValue => {
      this.setState({ [fieldName]: fieldValue });
    };
  };

  getFilteredProducts(products, from, before, discountPercent) {
    return products
      .filter(product => {
        const price = product.price;

        if (discountPercent !== 0) {
          const discount = product.discount;

          return (
            price >= from && price <= before && discount === discountPercent
          );
        }

        return price >= from && price <= before;
      })
      .sort((a, b) => a.price - b.price);
  }

  render() {
    const { from, before, discount } = this.state;

    return (
      <div className={s.container}>
        <Filter
          from={from}
          before={before}
          discount={discount}
          handleChange={this.getChangeHandlerFor}
        />
        <Products
          products={this.getFilteredProducts(products, from, before, discount)}
        />
      </div>
    );
  }
}

export default App;
