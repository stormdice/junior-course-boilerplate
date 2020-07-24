import React from 'react';
import pt from 'prop-types';
import s from './Field.module.css';

const Field = ({ input }) => {
  return <fieldset className={s.fieldset}>{input}</fieldset>;
};

Field.propTypes = {
  input: pt.node.isRequired
};

export default Field;
