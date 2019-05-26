import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
`;

const InputBox = styled.div`
  height: 30px;
  margin: 0 auto;
`;

const Input = styled.input`
  height: 100%;
  width: 40vw;
  margin: 0 auto;
  line-height: 'normal';
  border-radius: 0;
  border: none;
  font-family: 'Ranga', 'Hi Melody';
  font-size: 28px;
  text-align: center;
  ::placeholder {
    font-family: 'Ranga', 'Hi Melody';
    font-size: 28px;
    text-align: center;
    color: coral;
  }
`;

const Icon = styled.i`
  height: 100%;
  font-size: 28px;
  margin-right: 10px;
`;

const AddressSearch = ({
  searchTerm,
  placeholder,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Icon className="fas fa-map-marker-alt" />
        <Input
          placeholder={placeholder}
          value={searchTerm}
          onChange={updateTerm}
        />
      </InputBox>
    </Form>
  </Container>
);

export default AddressSearch;
