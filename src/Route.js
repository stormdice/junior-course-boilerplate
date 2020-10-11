import React from 'react';
import { connect } from 'react-redux';
import { routerSelectors } from './store/router';

const { selectRoute } = routerSelectors;
class Route extends React.Component {
  render() {
    const path = this.props.route;

    if (path !== this.props.path) {
      return false;
    }

    return this.props.children;
  }
}

const mapStateToProps = state => ({
  route: selectRoute(state)
});

export default connect(mapStateToProps)(Route);
