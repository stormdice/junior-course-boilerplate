import React from 'react';
import Title from '../Title/Title';
import ProductsList from '../ProductsList/ProductsList';
import style from './App.module.css';
import data from '../../products.json';

function App() {
  return (
    <div className={style.container}>
      <Title />
      <ProductsList products={data} />
    </div>
  );
};

export default App;
