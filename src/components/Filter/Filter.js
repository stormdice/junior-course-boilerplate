import React from 'react';
import DiscountForm from '../DiscountForm';
import InputNumber from '../InputNumber';
import LogRender from '../LogRender';
import withInput from '../withInput';
import s from './Filter.module.css';

const InputHocced = withInput(InputNumber);

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
              <InputNumber
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
              <InputNumber
                name={'before'}
                placeholder={'40000'}
                value={before}
                onInputChange={onBeforeChange}
              />
            </div>
          </div>
        </fieldset>
        <DiscountForm
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
