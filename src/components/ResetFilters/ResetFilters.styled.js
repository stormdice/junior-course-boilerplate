import styled from 'styled-components/macro';

export const ResetFilters = styled.button.attrs({ type: 'button' })`
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 8px;
  box-sizing: border-box;

  font-family: inherit;
  font-size: 14px;
  line-height: 14px;
  color: #323c48;

  background-color: white;
  border: 1px solid #323c48;

  cursor: pointer;
  user-select: none;
  outline: none;
  transition: background-color 0.2s, color 0.2s, transform 0.2s;

  &:hover,
  &:focus {
    background-color: #323c48;
    color: white;
    transition: background-color 0.2s, color 0.2s;
  }

  &:active {
    transform: scale(0.98);
    transition: transform 0.2s;
  }
`;
