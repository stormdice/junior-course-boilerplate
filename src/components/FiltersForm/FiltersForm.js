import React from 'react';
import PriceRange from '../PriceRange';
import CategoryList from '../CategoryList';
import Discount from '../Discount';
import ResetFilters from '../ResetFilters';
import { Form, Field, Title } from './FiltersForm.styled';

const FiltersForm = () => (
  <Form>
    <Field>
      <Title>Цена</Title>
      <PriceRange />
    </Field>
    <Field>
      <Discount />
    </Field>
    <Field>
      <Title>Категории</Title>
      <CategoryList />
    </Field>
    <ResetFilters>Сбросить фильтры</ResetFilters>
  </Form>
);

export default FiltersForm;
