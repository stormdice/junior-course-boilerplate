import React from 'react';
import s from './CategoryList.module.css';
import CategoryLabel from '../CategoryLabel/CategoryLabel';

const CategoryList = ({ categoryLabels, handleCategoryChange, categories }) => {
  const renderLabels = categoryLabels.map(({ id, name, title }) => {
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
  });

  return <ul className={s.categories}>{renderLabels}</ul>;
};

export default CategoryList;
