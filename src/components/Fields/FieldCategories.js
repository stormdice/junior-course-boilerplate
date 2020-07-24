import React from 'react';
import pt from 'prop-types';
import Field from '../Field';
import CategoryList from '../CategoryList';

const FieldCategories = ({ categoryLabels, handleCategoryChange }) => (
  <Field
    input={
      <CategoryList
        title="Категории"
        categoryLabels={categoryLabels}
        handleCategoryChange={handleCategoryChange}
      />
    }
  />
);

FieldCategories.propTypes = {
  categoryLabels: pt.array.isRequired,
  handleCategoryChange: pt.func.isRequired,
  categories: pt.object.isRequired
};

export default FieldCategories;
