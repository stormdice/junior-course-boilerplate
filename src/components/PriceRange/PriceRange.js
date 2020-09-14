import React from 'react';
import InputMin from '../Inputs/InputMin';
import InputMax from '../Inputs/InputMax';
import { Container, InputContainer, Label } from './PriceRange.styled';

const PriceRange = () => (
  <Container>
    <InputContainer>
      <Label>от</Label>
      <InputMin name="min" />
    </InputContainer>
    <InputContainer>
      <Label>до</Label>
      <InputMax name="max" />
    </InputContainer>
  </Container>
);

export default PriceRange;
