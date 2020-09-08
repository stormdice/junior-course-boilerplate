import React from 'react';
import { InputMin, InputMax } from '../Inputs';
import s from './PriceRange.module.css';

const PriceRange = props => {
  const {
    handleInputChange,
    min,
    max,
    minProductPrice,
    maxProductPrice
  } = props;

  return (
    <div className={s.container}>
      <label className={s.field}>
        <span className={s.label}>от</span>
        <InputMin
          name="min"
          placeholder={minProductPrice}
          value={min}
          handleInputChange={handleInputChange('min')}
        />
      </label>
      <label className={s.field}>
        <span className={s.label}>до</span>
        <InputMax
          name="max"
          placeholder={maxProductPrice}
          value={max}
          handleInputChange={handleInputChange('max')}
        />
      </label>
    </div>
  );
};

export default PriceRange;
