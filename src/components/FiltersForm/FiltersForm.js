import React from 'react';
import LogRender from '../LogRender';
import PriceRange from '../PriceRange';
import CategoryList from '../CategoryList';
import { InputDiscount } from '../Inputs';
import ResetFilters from '../ResetFilters';
import s from './FiltersForm.module.css';

export default class FiltersForm extends LogRender {
  render() {
    const {
      handleInputChange,
      categoryLabels,
      handleCategoryChange,
      handleResetFilters
    } = this.props;

    return (
      <form className={s.filter}>
        <fieldset className={s.fieldset}>
          <legend className={s.title}>Цена</legend>
          <PriceRange handleInputChange={handleInputChange} />
        </fieldset>
        <fieldset className={s.fieldset}>
          <InputDiscount
            title="Скидка"
            name="discount"
            handleInputChange={handleInputChange('discount')}
          />
        </fieldset>
        <fieldset className={s.fieldset}>
          <legend className={s.title}>Категории</legend>
          <CategoryList
            categoryLabels={categoryLabels}
            handleCategoryChange={handleCategoryChange}
          />
        </fieldset>
        <ResetFilters handleResetFilters={handleResetFilters} />
      </form>
    );
  }
}
