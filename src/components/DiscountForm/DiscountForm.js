import React from 'react';
import LogRender from '../LogRender';
import Discount from 'csssr-school-input-discount';

export default class DiscountForm extends LogRender {
  render() {
    const { title, name, value, handleInputChange } = this.props;

    return (
      <Discount
        title={title}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    );
  }
}
