import React from 'react';
import CategoryCheckbox from '../CategoryCheckbox/CategoryCheckbox';
import s from './CategoryList.module.css';

const CategoryList = props => {
  const { handleCategoryChange, categories } = props;

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
};

export default CategoryList;
