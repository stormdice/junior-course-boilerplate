import React from 'react';
import PropTypes from 'prop-types';
import s from './FieldTitle.module.css';

const FieldTitle = ({ title }) => {
  return <h3 className={s.title}>{title}</h3>;
};

FieldTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default FieldTitle;
