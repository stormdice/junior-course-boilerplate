import React from 'react';
import pt from 'prop-types';
import s from './CategoryList.module.css';
import FieldTitle from '../FieldTitle';
import CategoryLabel from '../CategoryLabel/CategoryLabel';

const CategoryList = ({
  title,
  categoryLabels,
  handleCategoryChange,
  categories
}) => {
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

  return (
    <>
      <FieldTitle title={title} />
      <ul className={s.categories}>{renderLabels}</ul>
    </>
  );
};

CategoryList.propTypes = {
  title: pt.string.isRequired,
  categoryLabels: pt.array.isRequired,
  handleCategoryChange: pt.func.isRequired,
  categories: pt.object.isRequired
};

export default CategoryList;
