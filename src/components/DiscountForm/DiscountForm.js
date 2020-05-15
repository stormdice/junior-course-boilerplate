import Discount from 'csssr-school-input-discount';
import React from 'react';

class DiscountForm extends React.Component {
  render() {
    const { title, name, value, discountHandleChange } = this.props;

    return (
      <Discount
        title={title}
        name={name}
        value={value}
        onChange={discountHandleChange}
      />
    );
  }
}

export default DiscountForm;
