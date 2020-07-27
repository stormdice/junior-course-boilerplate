import React from 'react';
import LogRender from '../LogRender';
import s from './Filter.module.css';
import { FieldPrice, FieldDiscount, FieldCategories } from '../Fields';
import ResetFilters from '../ResetFilters';

export default class Filter extends LogRender {
  render() {
    const {
      handleInputChange,
      categoryLabels,
      categories,
      handleCategoryChange,
      handleResetFilters
    } = this.props;

    return (
      <form className={s.filter}>
        <FieldPrice handleInputChange={handleInputChange} />
        <FieldDiscount handleInputChange={handleInputChange} />
        <FieldCategories
          categoryLabels={categoryLabels}
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />
        <ResetFilters handleResetFilters={handleResetFilters} />
      </form>
    );
  }
}
