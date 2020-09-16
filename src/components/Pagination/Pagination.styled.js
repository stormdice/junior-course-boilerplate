import styled from 'styled-components/macro';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child a {
    min-width: 88px;
    margin-right: 16px;
  }

  &:last-child a {
    min-width: 88px;
    margin-left: 16px;
  }
`;
