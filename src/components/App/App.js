import React from 'react';
import Title from '../Title';
import ProductsList from '../ProductsList';
import style from './App.module.css';
import data from '../../products.json';

const App = () => {
  return (
    <div className={style.container}>
      <Title />
      <ProductsList products={data} />
    </div>
  );
};

export default App;
