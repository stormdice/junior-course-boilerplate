import React from 'react';
import { connect } from 'react-redux';

class Route extends React.Component {
  render() {
    const path = this.props.path;

    if (path !== this.props.path) {
      console.log('не равен');
      return false;
    }

    return this.props.children;
  }
}

const mapStateToProps = ({ router: { path } }) => ({ path });

export default connect(mapStateToProps)(Route);
