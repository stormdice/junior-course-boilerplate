import React from 'react';
import LogRender from '../LogRender';
import { InputMin, InputMax, InputDiscount } from '../InputComponents';
import CategoryList from '../CategoryList';
import s from './Filter.module.css';

export default class Filter extends LogRender {
  render() {
    const {
      min,
      max,
      discount,
      handleInputChange,
      categoryLabels,
      categories,
      handleCategoryChange,
      handleResetFilters
    } = this.props;

    return (
      <form className={s.filter}>
        <fieldset className={s.fieldset}>
          <legend className={s.title}>Цена</legend>
          <div className={s.container}>
            <label className={s.field}>
              <span className={s.label}>от</span>
              <InputMin
                name="min"
                placeholder={min}
                value={min}
                onInputChange={handleInputChange('min')}
              />
            </label>
            <label className={s.field}>
              <span className={s.label}>до</span>
              <InputMax
                name="max"
                placeholder={max}
                value={max}
                onInputChange={handleInputChange('max')}
              />
            </label>
          </div>
        </fieldset>
        <fieldset className={s.fieldset}>
          <InputDiscount
            title="Скидка"
            name="discount"
            value={discount}
            onInputChange={handleInputChange('discount')}
          />
        </fieldset>
        <fieldset className={s.fieldset}>
          <legend className={s.title}>Категории</legend>
          <CategoryList
            categoryLabels={categoryLabels}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
          />
        </fieldset>
        <button className={s.reset} type="button" onClick={handleResetFilters}>
          Сбросить фильтры
        </button>
      </form>
    );
  }
}
