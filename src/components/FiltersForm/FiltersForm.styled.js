import styled from 'styled-components/macro';

export const Form = styled.form`
  padding-top: 104px;

  & input {
    outline: 2px solid transparent;
    transition: outline-color 0.2s;
  }

  & input:hover,
  & input:focus {
    outline-color: #323c48;
    transition: outline-color 0.2s;
  }
`;

export const Field = styled.fieldset`
  margin: 0 0 23px;
  padding: 0;
  border: none;

  & h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const Title = styled.legend`
  margin: 0;
  padding: 0 0 16px;

  font-family: 'OpenSans', sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
`;
