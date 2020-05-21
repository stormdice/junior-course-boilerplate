import React from 'react';
import LogRender from '../LogRender';
import { InputBefore, InputFrom, InputDiscount } from '../InputComponents';
import CategoryList from '../CategoryList';
import s from './Filter.module.css';

export default class Filter extends LogRender {
  render() {
    const { min, max, discount, handleChange, categoryLabels } = this.props;

    return (
      <form className={s.filter}>
        <fieldset className={s.fieldset}>
          <legend className={s.filterTitle}>Цена</legend>
          <div className={s.fieldContainer}>
            <label className={s.field}>
              <span className={s.fieldText}>от</span>
              <InputFrom
                name="from"
                placeholder={min}
                value={min}
                onInputChange={handleChange('min')}
              />
            </label>
            <label className={s.field}>
              <span className={s.fieldText}>до</span>
              <InputBefore
                name="before"
                placeholder={max}
                value={max}
                onInputChange={handleChange('max')}
              />
            </label>
          </div>
        </fieldset>
        <fieldset className={s.fieldset}>
          <InputDiscount
            title="Скидка"
            name="discount"
            value={discount}
            onInputChange={handleChange('discount')}
          />
        </fieldset>
        <fieldset className={s.fieldset}>
          <legend className={s.filterTitle}>Категории</legend>
          <CategoryList categoryLabels={categoryLabels} />
        </fieldset>
      </form>
    );
  }
}
