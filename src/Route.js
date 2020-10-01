import React from 'react';
import { connect } from 'react-redux';
import { routerSelectors } from './store/router';

const { selectPageNum } = routerSelectors;

class Route extends React.Component {
  render() {
    const path = this.props.pageNum;

    if (path !== this.props.path) {
      return false;
    }

    return this.props.children;
  }
}

const mapStateToProps = state => ({
  pageNum: selectPageNum(state)
});

export default connect(mapStateToProps)(Route);
