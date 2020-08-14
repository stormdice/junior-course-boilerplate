import React from 'react';
import { InputMin, InputMax } from '../Inputs';
import { FormConsumer } from '../../contexts';
import pt from 'prop-types';
import s from './PriceRange.module.css';

const PriceRangeForm = ({ handleInputChange }) => {
  return (
    <FormConsumer>
      {({ min, max }) => (
        <>
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
  handleInputChange: pt.func.isRequired
};

export default PriceRangeForm;
