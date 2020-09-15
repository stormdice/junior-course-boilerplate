import React from 'react';
import FiltersForm from '../FiltersForm';
import Products from '../Products';
import Route from '../../Route';
import Link from '../../Link';
import { Container } from './App.styled';

const App = () => (
  <Container>
    <FiltersForm />
    <Products />
    <Route path="/?pageNum=2">
      <p>мы на второй странице</p>
    </Route>
    <Route path="/">
      <p>мы на главной</p>
    </Route>
    <div>
      <Link href="/">Главная</Link>
      <Link href="/?pageNum=2">Страница 2</Link>
    </div>
  </Container>
);

export default App;
