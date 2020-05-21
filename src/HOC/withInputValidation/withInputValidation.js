import React, { Component } from 'react';
import toInt from 'csssr-school-utils/lib/toInt';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withInputValidation = HoccedComponent => {
  class withInputValidation extends Component {
    handleChange = ({ target }) => {
      const value = toInt(target.value);

      this.props.onInputChange(value);
    };

    render() {
      return (
        <HoccedComponent {...this.props} onInputChange={this.handleChange} />
      );
    }
  }

  withInputValidation.displayName = `withInputValidation(${getDisplayName(
    HoccedComponent
  )})`;

  return withInputValidation;
};

export default withInputValidation;
