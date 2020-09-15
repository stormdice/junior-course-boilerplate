import React from 'react';
import { connect } from 'react-redux';

class Route extends React.Component {
  render() {
    const path = this.props.routing.path;
    console.log(path);

    if (path !== this.props.path) {
      return false;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({ routing }) => ({ routing });

export default connect(mapStateToProps)(Route);
