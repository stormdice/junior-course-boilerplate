import React, { Component } from 'react';
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
