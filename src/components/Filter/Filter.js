import React from 'react';
import LogRender from '../LogRender';
import { InputBefore, InputFrom, InputDiscount } from '../InputComponents';
import s from './Filter.module.css';

class Filter extends LogRender {
  render() {
    const { from, before, discount, handleChange } = this.props;

    return (
      <form className={s.filter}>
        <fieldset className={s.fieldset}>
          <legend className={s.filterTitle}>Цена</legend>
          <div className={s.fieldContainer}>
            <label className={s.field}>
              <span className={s.fieldText}>от</span>
              <InputFrom
                name="from"
                placeholder={from}
                value={from}
                onInputChange={handleChange('from')}
              />
            </label>
            <label className={s.field}>
              <span className={s.fieldText}>до</span>
              <InputBefore
                name="before"
                placeholder={before}
                value={before}
                onInputChange={handleChange('before')}
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
        </fieldset>
      </form>
    );
  }
}

export default Filter;
