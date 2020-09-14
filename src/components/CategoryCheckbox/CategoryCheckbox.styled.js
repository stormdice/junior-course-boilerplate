import styled from 'styled-components/macro';

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  border: 0;
  margin: -1px;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
  white-space: nowrap;

  &:hover + label {
    color: #323c48;
    border-color: #323c48;
    transition: border-color 0.2s, color 0.2s;
  }

  &:checked + label {
    background-color: #323c48;
    border-color: #323c48;
    color: #ffffff;
  }
`;

export const Label = styled.label`
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 7px 15px;

  font-size: 14px;
  line-height: 14px;
  color: #7e8fa4;

  border: 1px solid #7e8fa4;
  border-radius: 15px;

  cursor: pointer;
  user-select: none;
  transition: border-color 0.2s, color 0.2s;
`;
