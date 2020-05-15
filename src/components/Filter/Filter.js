import React from 'react';
import LogRender from '../LogRender';
import { InputBefore, InputFrom, InputDiscount } from '../input-components';
import s from './Filter.module.css';

class Filter extends LogRender {
  render() {
    const {
      from,
      before,
      discount,
      onFromChange,
      onBeforeChange,
      onDiscountChange
    } = this.props;

    return (
      <form className={s.filter}>
        <fieldset className={s.fieldset}>
          <legend className={s.filterTitle}>Цена</legend>
          <div className={s.fieldContainer}>
            <div className={s.field}>
              <label className={s.fieldLabel} htmlFor="from">
                от
              </label>
              <InputFrom
                name={'from'}
                placeholder={'1000'}
                value={from}
                onInputChange={onFromChange}
              />
            </div>
            <div className={s.field}>
              <label className={s.fieldLabel} htmlFor="before">
                до
              </label>
              <InputBefore
                name={'before'}
                placeholder={'40000'}
                value={before}
                onInputChange={onBeforeChange}
              />
            </div>
          </div>
        </fieldset>
        <InputDiscount
          title={'Скидка'}
          name={'discount'}
          value={discount}
          onInputChange={onDiscountChange}
        />
      </form>
    );
  }
}

export default Filter;
