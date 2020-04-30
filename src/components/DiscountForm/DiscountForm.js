import Discount from 'csssr-school-input-discount';
import toInt from 'csssr-school-utils/lib/toInt';
import React from 'react';

class DiscountForm extends React.Component {
  handleChange = event => {
    const value = event.target.value;

    if (value.length > 2) {
      return value;
    }

    this.props.onInputChange(toInt(value));
  };

  render() {
    const { title, name, value } = this.props;

    return (
      <Discount
        title={title}
        name={name}
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default DiscountForm;
