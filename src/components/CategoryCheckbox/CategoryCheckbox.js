import React from 'react';
import pt from 'prop-types';
import { Input, Label } from './CategoryCheckbox.styled';

const CategoryCheckbox = ({ name, title, onChange, categories }) => {
  const handleChange = ({ target }) => {
    onChange(target.checked);
  };

  const isChecked = categories.some(category => category === name);

  return (
    <>
      <Input
        type="checkbox"
        id={name}
        name={name}
        onChange={handleChange}
        checked={isChecked}
      />
      <Label htmlFor={name}>{title}</Label>
    </>
  );
};

CategoryCheckbox.propTypes = {
  name: pt.string.isRequired,
  title: pt.string.isRequired,
  onChange: pt.func.isRequired
};

export default CategoryCheckbox;
