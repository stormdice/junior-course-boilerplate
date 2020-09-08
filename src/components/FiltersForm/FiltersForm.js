import React from 'react';
import PriceRange from '../../containers/PriceRange';
import CategoryList from '../../containers/CategoryList';
import Discount from '../../containers/Discount';
import ResetFilters from '../../containers/ResetFilters';
import s from './FiltersForm.module.css';

const FiltersForm = ({ handleInputChange }) => {
  return (
    <form className={s.filter}>
      <fieldset className={s.fieldset}>
        <legend className={s.title}>Цена</legend>
        <PriceRange handleInputChange={handleInputChange} />
      </fieldset>
      <fieldset className={s.fieldset}>
        <Discount handleInputChange={handleInputChange('discount')} />
      </fieldset>
      <fieldset className={s.fieldset}>
        <legend className={s.title}>Категории</legend>
        <CategoryList />
      </fieldset>
      <ResetFilters />
    </form>
  );
};

export default FiltersForm;
