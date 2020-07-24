import React from 'react';
import LogRender from '../LogRender';
import s from './Filter.module.css';
import { FieldPrice, FieldDiscount, FieldCategories } from '../Fields';
import ResetFilters from '../ResetFilters';

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
        <FieldPrice min={min} max={max} handleInputChange={handleInputChange} />
        <FieldDiscount
          discount={discount}
          handleInputChange={handleInputChange}
        />
        <FieldCategories
          categoryLabels={categoryLabels}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
        <ResetFilters onClick={handleResetFilters} />
      </form>
    );
  }
}
