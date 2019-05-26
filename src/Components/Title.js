import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Strapline = styled.div`
  padding: 0 50px;
  font-family: 'Caveat';
  text-align: center;
  font-size: 20px;
`;

const Title = () => (
  <Container>
    <Header>FXXKING AWESOME WEATHER</Header>
    <Strapline>
      What a fxxking awesome web! share it with ur fam and feel the marvelous
      power of the nature together!.
    </Strapline>
  </Container>
);

export default Title;
