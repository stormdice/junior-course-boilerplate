import React from 'react';
import LogRender from '../LogRender';
import Discount from 'csssr-school-input-discount';
import { FormConsumer } from '../FormContext';

export default class DiscountForm extends LogRender {
  render() {
    const { title, name, handleInputChange } = this.props;

    return (
      <FormConsumer>
        {({ discount }) => (
          <Discount
            title={title}
            name={name}
            value={discount}
            onChange={handleInputChange}
          />
        )}
      </FormConsumer>
    );
  }
}
