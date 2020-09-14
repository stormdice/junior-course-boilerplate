import React from 'react';
import InputMin from '../InputMin';
import InputMax from '../InputMax';
import { Container, InputContainer, Label } from './PriceRange.styled';

const PriceRange = () => (
  <Container>
    <InputContainer>
      <Label>от</Label>
      <InputMin />
    </InputContainer>
    <InputContainer>
      <Label>до</Label>
      <InputMax />
    </InputContainer>
  </Container>
);

export default PriceRange;
