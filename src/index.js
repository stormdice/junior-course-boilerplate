import React from 'react';
import ReactDOM from 'react-dom';
import data from './products.json';
import './index.css';

function Title() {
  return <h1>Список товаров</h1>
};

function ProductItem({name}) {
  return <span>{ name }</span>
};

function ProductsList({ products }) {
  const productsMarkup = products.map((product) => {

    const {id, ...productProps} = product;

    return (
      <li key={ id }>
        <ProductItem {...productProps} />
      </li>
    );
  });

  return (
    <ul>
      { productsMarkup }
    </ul>
  );
};

function App() {
  const firstThreeProducts = data.slice(0, 3);

  return (
    <div className="container">
      <Title />
      <ProductsList products={firstThreeProducts} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
