import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from '../../store/router';
import { Link } from './PaginationLink.styled';

const { pushState } = routerActions;

class PaginationLink extends React.Component {
  handleLinkClick = evt => {
    evt.preventDefault();
    const href = this.props.href;
    this.props.pushState(href);
  };

  render() {
    return (
      <Link href={this.props.href} onClick={this.handleLinkClick}>
        {this.props.children}
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  pushState: url => dispatch(pushState(url))
});

export default connect(null, mapDispatchToProps)(PaginationLink);
