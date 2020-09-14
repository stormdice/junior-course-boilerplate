import styled, { css } from 'styled-components/macro';
import starEmptySvg from './img/star-empty.svg';
import starFilledSvg from './img/star-filled.svg';

const filledStar = css`
  background-image: url(${starFilledSvg});
`;

const emptyStar = css`
  background-image: url(${starEmptySvg});
`;

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 56px;
  min-height: 715px;
  margin-top: 0;
  margin-bottom: 41px;
  padding-left: 0;
  list-style: none;
`;

export const RatingStar = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 13px;
  margin-right: 10px;
  background-repeat: no-repeat;

  ${({ filled }) => (filled ? filledStar : emptyStar)};
`;
