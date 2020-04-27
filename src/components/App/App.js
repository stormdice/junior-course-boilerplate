import React from 'react';
import data from '../../products.json';
import Filter from '../Filter';
import LogRender from '../LogRender';
import Products from '../Products';
import style from './App.module.css';

const { products, price } = data;

class App extends LogRender {
  constructor(props) {
    super(props);

    this.state = {
      from: price.min,
      before: price.max
    };
  }

  getPrice = (from, before) => {
    this.setState({
      from,
      before
    });
  };

  getProductsByFilter(products, from, before) {
    if (from === null && before === null) {
      return products;
    }

    return products
      .filter(product => {
        const price = +product.price;

        return price >= from && price <= before;
      })
      .sort((a, b) => a.price - b.price);
  }

  render() {
    const { from, before } = this.state;

    return (
      <div className={style.container}>
        <Filter from={from} before={before} getPrice={this.getPrice} />
        <Products products={this.getProductsByFilter(products, from, before)} />
      </div>
    );
  }
}

export default App;
