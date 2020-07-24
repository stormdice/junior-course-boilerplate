import React, { Component } from 'react';
import pt from 'prop-types';
import s from './CategoryLabel.module.css';

export default class CategoryLabel extends Component {
  render() {
    const { name, title, handleCategoryChange, checked } = this.props;

    return (
      <div>
        <input
          className={s.input}
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={handleCategoryChange}
        />
        <label className={s.label} htmlFor={name}>
          {title}
        </label>
      </div>
    );
  }
}

CategoryLabel.propTypes = {
  name: pt.string.isRequired,
  title: pt.string.isRequired,
  handleCategoryChange: pt.func.isRequired,
  checked: pt.bool.isRequired
};
