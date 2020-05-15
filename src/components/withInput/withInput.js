import React, { Component } from 'react';
import toInt from 'csssr-school-utils/lib/toInt';

const DISCOUNT_LIMIT = 100;

const withInput = HoccedComponent => {
  return class extends Component {
    priceHandleChange = ({ target }) => {
      const value = toInt(target.value);

      this.props.onInputChange(value);
    };

    discountHandleChange = ({ target }) => {
      const value = toInt(target.value);

      if (value >= DISCOUNT_LIMIT) {
        return value;
      }

      this.props.onInputChange(value);
    };

    render() {
      return (
        <HoccedComponent
          {...this.props}
          priceHandleChange={this.priceHandleChange}
          discountHandleChange={this.discountHandleChange}
        />
      );
    }
  };
};

export default withInput;
