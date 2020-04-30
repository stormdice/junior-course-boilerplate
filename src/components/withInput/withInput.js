import React, { Component } from 'react';

const withInput = HoccedComponent => {
  return class extends Component {
    render() {
      return <HoccedComponent {...this.props} />;
    }
  };
};

export default withInput;
