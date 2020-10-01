import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from '../../store/router';
import { Link } from './PaginationLink.styled';

const { pushState } = routerActions;

class PaginationLink extends React.Component {
  handleLinkClick = evt => {
    evt.preventDefault();
    const href = this.props.href;

    if (href === 'back') {
      window.history.back();
      return;
    }

    if (href === 'forward') {
      window.history.forward();
      return;
    }

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

const mapDispatchToProps = dispatch => ({
  pushState: url => dispatch(pushState(url))
});

export default connect(null, mapDispatchToProps)(PaginationLink);
