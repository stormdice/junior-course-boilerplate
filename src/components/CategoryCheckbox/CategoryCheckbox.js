import React from 'react';
import pt from 'prop-types';
import s from './CategoryCheckbox.module.css';

const CategoryCheckbox = ({
  name,
  title,
  handleCategoryChange,
  categories
}) => {
  const handleChange = ({ target }) => {
    handleCategoryChange(target.checked);
  };

  const isChecked = categories.has(name);

  return (
    <>
      <input
        className={s.input}
        type="checkbox"
        id={name}
        name={name}
        onChange={handleChange}
        checked={isChecked}
      />
      <label className={s.label} htmlFor={name}>
        {title}
      </label>
    </>
  );
};

CategoryCheckbox.propTypes = {
  name: pt.string.isRequired,
  title: pt.string.isRequired,
  handleCategoryChange: pt.func.isRequired
};

export default CategoryCheckbox;
