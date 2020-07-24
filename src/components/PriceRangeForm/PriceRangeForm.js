import React from 'react';
import { InputMin, InputMax } from '../Inputs';
import FieldTitle from '../FieldTitle';
import pt from 'prop-types';
import s from './PriceRangeForm.module.css';

const PriceRangeForm = ({ title, min, max, handleInputChange }) => {
  return (
    <>
      <FieldTitle title={title} />
      <div className={s.container}>
        <label className={s.field}>
          <span className={s.label}>от</span>
          <InputMin
            name="min"
            placeholder={min}
            value={min}
            handleInputChange={handleInputChange('min')}
          />
        </label>
        <label className={s.field}>
          <span className={s.label}>до</span>
          <InputMax
            name="max"
            placeholder={max}
            value={max}
            handleInputChange={handleInputChange('max')}
          />
        </label>
      </div>
    </>
  );
};

PriceRangeForm.propTypes = {
  title: pt.string.isRequired,
  min: pt.number.isRequired,
  max: pt.number.isRequired,
  handleInputChange: pt.func.isRequired
};

export default PriceRangeForm;
