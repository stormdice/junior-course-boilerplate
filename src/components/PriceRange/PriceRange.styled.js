import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
`;

export const InputContainer = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 12px;
  align-items: center;
`;

export const Label = styled.span`
  cursor: pointer;
`;
