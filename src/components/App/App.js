import React from 'react';
import data from '../../products.json';
import Filter from '../Filter';
import LogRender from '../LogRender';
import Products from '../Products';
import s from './App.module.css';

const { products, price } = data;

class App extends LogRender {
  constructor(props) {
    super(props);

    this.state = {
      from: price.min,
      before: price.max,
      discount: Number(price.discount)
    };
  }

  handleFromChange = from => {
    this.setState({ from });
  };

  handleBeforeChange = before => {
    this.setState({ before });
  };

  handleDiscountChange = discount => {
    this.setState({ discount });
  };

  getProductsByFilter(products, from, before, discountPercent) {
    if (from > before) {
      return products;
    }

    return products
      .filter(product => {
        const price = Number(product.price);

        if (discountPercent !== 0) {
          const discount = Number(product.discount);

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
          handleFromChange={this.handleFromChange}
          handleBeforeChange={this.handleBeforeChange}
          handleDiscountChange={this.handleDiscountChange}
        />
        <Products
          products={this.getProductsByFilter(products, from, before, discount)}
        />
      </div>
    );
  }
}

export default App;
