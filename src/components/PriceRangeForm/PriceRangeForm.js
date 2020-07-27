import React from 'react';
import FieldTitle from '../FieldTitle';
import { InputMin, InputMax } from '../Inputs';
import { FormConsumer } from '../FormContext';
import pt from 'prop-types';
import s from './PriceRangeForm.module.css';

const PriceRangeForm = ({ title, handleInputChange }) => {
  return (
    <FormConsumer>
      {({ min, max }) => (
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
      )}
    </FormConsumer>
  );
};

PriceRangeForm.propTypes = {
  title: pt.string.isRequired,
  handleInputChange: pt.func.isRequired
};

export default PriceRangeForm;
