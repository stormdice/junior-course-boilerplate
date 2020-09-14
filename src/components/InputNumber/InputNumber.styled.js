import styled from 'styled-components/macro';

export const Input = styled.input`
  width: 100%;
  padding: 5px 16px;
  box-sizing: border-box;

  font: inherit;
  font-size: 14px;
  line-height: 14px;

  border: 1px solid hsl(213, 17%, 57%);

  &::placeholder {
    color: hsl(213, 17%, 57%);
  }
`;
