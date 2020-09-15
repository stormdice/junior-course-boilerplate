import React from 'react';
import { connect } from 'react-redux';
import { pushState } from './store/actions';

class Link extends React.Component {
  handleLinkClick = evt => {
    evt.preventDefault();
    this.props.pushState(this.props.href);
  };

  render() {
    return (
      <a href={this.props.href} onClick={this.handleLinkClick}>
        {this.props.children}
      </a>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pushState: url => dispatch(pushState(url))
  };
};

export default connect(null, mapDispatchToProps)(Link);
