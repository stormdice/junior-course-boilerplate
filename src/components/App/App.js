import React from 'react';
import FiltersForm from '../FiltersForm';
import Products from '../Products';
import { Container } from './App.styled';

const App = () => (
  <Container>
    <FiltersForm />
    <Products />
  </Container>
);

export default App;
