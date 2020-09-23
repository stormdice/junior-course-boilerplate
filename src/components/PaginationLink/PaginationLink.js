import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from '../../store/router';
import { Link } from './PaginationLink.styled';

class PaginationLink extends React.Component {
  handleLinkClick = evt => {
    evt.preventDefault();
    const url = new URL(window.location.href);

    url.searchParams.set('pageNum', this.props.href);
    this.props.pushState(url);
  };

  render() {
    return (
      <Link href={this.props.href} onClick={this.handleLinkClick}>
        {this.props.children}
      </Link>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pushState: url => dispatch(routerActions.pushState(url))
  };
};

export default connect(null, mapDispatchToProps)(PaginationLink);