import React from 'react';
import pt from 'prop-types';
import s from './CategoryList.module.css';
import FieldTitle from '../FieldTitle';
import CategoryLabel from '../CategoryLabel/CategoryLabel';
import { FormConsumer } from '../FormContext';

const CategoryList = ({ title, categoryLabels, handleCategoryChange }) => {
  return (
    <FormConsumer>
      {({ categories }) => (
        <>
          <FieldTitle title={title} />
          <ul className={s.categories}>
            {categoryLabels.map(({ id, name, title }) => {
              return (
                <li className={s.category} key={id}>
                  <CategoryLabel
                    name={name}
                    title={title}
                    handleCategoryChange={handleCategoryChange}
                    checked={categories[name]}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </FormConsumer>
  );
};

CategoryList.propTypes = {
  title: pt.string.isRequired,
  categoryLabels: pt.array.isRequired,
  handleCategoryChange: pt.func.isRequired
};

export default CategoryList;
