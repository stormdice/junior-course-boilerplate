import React from 'react';
import { List, ListItem } from './Pagination.styled';
import PaginationLink from '../PaginationLink';

const Pagination = () => (
  <List>
    <ListItem>
      <PaginationLink active={false}>назад</PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={true} href="1">
        1
      </PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={false} href="2">
        2
      </PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={false}>...</PaginationLink>
    </ListItem>
    <ListItem>
      <PaginationLink active={false}>вперед</PaginationLink>
    </ListItem>
  </List>
);

export default Pagination;
