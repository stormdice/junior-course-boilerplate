import React from 'react';
import LogRender from '../LogRender';
import Discount from 'csssr-school-input-discount';

export default class DiscountForm extends LogRender {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === this.props.value) {
      return false;
    }

    return true;
  }

  render() {
    const { title, name, value, onInputChange } = this.props;

    return (
      <Discount
        title={title}
        name={name}
        value={value}
        onChange={onInputChange}
      />
    );
  }
}
