import React from 'react';
import CategoryCheckbox from '../CategoryCheckbox/CategoryCheckbox';
import { FormConsumer } from '../../contexts/FormContext';
import pt from 'prop-types';
import s from './CategoryList.module.css';

const CategoryList = ({ handleCategoryChange }) => {
  return (
    <FormConsumer>
      {({ categories }) => {
        return (
          <ul className={s.categories}>
            <li className={s.category}>
              <CategoryCheckbox
                name="books"
                title="Books"
                handleCategoryChange={handleCategoryChange('books')}
                categories={categories}
              />
            </li>
            <li className={s.category}>
              <CategoryCheckbox
                name="clothes"
                title="Clothes"
                handleCategoryChange={handleCategoryChange('clothes')}
                categories={categories}
              />
            </li>
          </ul>
        );
      }}
    </FormConsumer>
  );
};

CategoryList.propTypes = {
  handleCategoryChange: pt.func.isRequired
};

export default CategoryList;
