import React, { Component } from 'react';
import toInt from 'csssr-school-utils/lib/toInt';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withInputValidation = HoccedComponent => {
  class withInputValidation extends Component {
    handleChange = ({ target }) => {
      const { handleMinPriceInputChange } = this.props;
      const handleInputChange = handleMinPriceInputChange;
      const value = toInt(target.value) === 0 ? '' : toInt(target.value);

      handleInputChange(value);
    };

    render() {
      return (
        <HoccedComponent
          {...this.props}
          handleInputChange={this.handleChange}
        />
      );
    }
  }

  withInputValidation.displayName = `withInputValidation(${getDisplayName(
    HoccedComponent
  )})`;

  return withInputValidation;
};

export default withInputValidation;
