import React from 'react';
import { connect } from 'react-redux';
import { pushState } from '../../store/actions';
import { Link } from './PaginationLink.styled';

class PaginationLink extends React.Component {
  handleLinkClick = evt => {
    evt.preventDefault();
    this.props.pushState(this.props.href);
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
    pushState: url => dispatch(pushState(url))
  };
};

export default connect(null, mapDispatchToProps)(PaginationLink);
