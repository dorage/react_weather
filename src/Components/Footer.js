import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
`;

const Footer = styled.div`
  text-align: center;
  font-size: 30px;
  margin-bottom: 10px;
`;

const Title = () => (
  <Container>
    <Footer>made by dorage</Footer>
  </Container>
);

export default Title;
