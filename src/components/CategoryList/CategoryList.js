import React from 'react';
import pt from 'prop-types';
import s from './CategoryList.module.css';
import CategoryCheckbox from '../CategoryCheckbox/CategoryCheckbox';

const CategoryList = ({ handleCategoryChange }) => {
  return (
    <ul className={s.categories}>
      <li className={s.category}>
        <CategoryCheckbox
          name="books"
          title="Books"
          handleCategoryChange={handleCategoryChange('books')}
        />
      </li>
      <li className={s.category}>
        <CategoryCheckbox
          name="clothes"
          title="Clothes"
          handleCategoryChange={handleCategoryChange('clothes')}
        />
      </li>
    </ul>
  );
};

CategoryList.propTypes = {
  handleCategoryChange: pt.func.isRequired
};

export default CategoryList;
