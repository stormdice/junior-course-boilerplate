import React from 'react';
import CategoryCheckbox from '../CategoryCheckbox';
import { List, ListItem } from './CategoryList.styled';

const CategoryListPresenter = ({ getCategoryChangeHandler, categories }) => (
  <List>
    <ListItem>
      <CategoryCheckbox
        name="books"
        title="Books"
        onChange={getCategoryChangeHandler('books')}
        categories={categories}
      />
    </ListItem>
    <ListItem>
      <CategoryCheckbox
        name="clothes"
        title="Clothes"
        onChange={getCategoryChangeHandler('clothes')}
        categories={categories}
      />
    </ListItem>
  </List>
);

export default CategoryListPresenter;
