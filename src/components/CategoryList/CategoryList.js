import React from 'react';
import pt from 'prop-types';
import s from './CategoryList.module.css';
import CategoryCheckbox from '../CategoryCheckbox/CategoryCheckbox';
import { FormConsumer } from '../../contexts';

const CategoryList = ({ categoryLabels, handleCategoryChange }) => {
  return (
    <FormConsumer>
      {({ categories }) => (
        <ul className={s.categories}>
          {categoryLabels.map(({ id, name, title }) => {
            return (
              <li className={s.category} key={id}>
                <CategoryCheckbox
                  name={name}
                  title={title}
                  handleCategoryChange={handleCategoryChange}
                  checked={categories[name]}
                />
              </li>
            );
          })}
        </ul>
      )}
    </FormConsumer>
  );
};

CategoryList.propTypes = {
  categoryLabels: pt.array.isRequired,
  handleCategoryChange: pt.func.isRequired
};

export default CategoryList;
