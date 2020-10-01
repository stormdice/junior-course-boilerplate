import React from 'react';
import { List, ListItem } from './Pagination.styled';
import PaginationLink from '../PaginationLink';

const Pagination = () => (
  <List>
    <ListItem>
      <PaginationLink active={false} href="back">
        назад
      </PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={true} href="?pageNum=1">
        1
      </PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={false} href="?pageNum=2">
        2
      </PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={false}>...</PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={false} href="forward">
        вперед
      </PaginationLink>
    </ListItem>
  </List>
);

export default Pagination;
