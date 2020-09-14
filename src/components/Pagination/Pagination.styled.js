import styled, { css } from 'styled-components/macro';

const linkStyle = css`
  background-color: #ffffff;
  color: #7e8fa4;
`;

const linkStyleActive = css`
  background-color: #5695ed;
  color: #ffffff;
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
`;

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

export const Link = styled.a`
  display: block;
  min-width: 34px;
  margin-right: 2px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  text-align: center;
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
  border: 1px solid #c5cfde;
  user-select: none;

  &:hover {
    color: #323c48;
    border-color: #323c48;
    transition: color 0.2s, border-color 0.2s;
  }

  ${props => (props.active ? linkStyleActive : linkStyle)}
`;
