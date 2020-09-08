import React from 'react';
import FiltersForm from '../../containers/FiltersForm';
import Products from '../../containers/Products';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.container}>
      <FiltersForm />
      <Products />
    </div>
  );
};

export default App;
