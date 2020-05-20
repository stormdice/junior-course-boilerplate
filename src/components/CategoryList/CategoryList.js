import React from 'react';
import s from './CategoryList.module.css';
import CategoryLabel from '../CategoryLabel/CategoryLabel';

const CategoryList = ({ categoryLabels }) => {
  const renderLabels = categoryLabels.map(({ id, name, title }) => {
    return (
      <li className={s.listItem} key={id}>
        <CategoryLabel name={name} title={title} />
      </li>
    );
  });

  return <ul className={s.list}>{renderLabels}</ul>;
};

export default CategoryList;
