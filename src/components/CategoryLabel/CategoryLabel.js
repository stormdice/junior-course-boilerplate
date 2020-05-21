import React, { Component } from 'react';
import s from './CategoryLabel.module.css';

export default class CategoryLabel extends Component {
  state = {
    isChecked: false
  };

  handleInputChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    const { name, title } = this.props;

    return (
      <div>
        <input
          className={s.input}
          type="checkbox"
          id={name}
          name={name}
          checked={this.state.isChecked}
          onChange={this.handleInputChange}
        />
        <label className={s.label} htmlFor={name}>
          {title}
        </label>
      </div>
    );
  }
}
