import React from 'react';
import { List, ListItem, Link } from './Pagination.styled';

const linkTransition = evt => {
  evt.preventDefault();

  if (evt.target.tagName !== 'A') {
    return;
  }

  window.history.pushState({}, 'page 2', '?pageNum=2');
};

const Pagination = () => (
  <List onClick={linkTransition}>
    <ListItem>
      <Link active={false} href="/?prevPage">
        назад
      </Link>
    </ListItem>
    <ListItem>
      <Link active={true} href="/?pageNum=1">
        1
      </Link>
    </ListItem>
    <ListItem>
      <Link active={false} href="/?pageNum=2">
        2
      </Link>
    </ListItem>
    <ListItem>
      <Link active={false}>...</Link>
    </ListItem>
    <ListItem>
      <Link active={false} href="/?nextPage">
        вперед
      </Link>
    </ListItem>
  </List>
);

export default Pagination;
