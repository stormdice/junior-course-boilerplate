import styled from 'styled-components/macro';

export const Price = styled.div`
  display: inline-block;
  vertical-align: baseline;
  margin-right: 8px;
  font-weight: 600;
  font-size: ${({ small }) => (small ? '12px' : '20px')};
  line-height: 24px;
`;

export const Unit = styled.span`
  font-weight: 400;
`;
