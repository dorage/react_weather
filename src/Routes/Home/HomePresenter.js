import React from 'react';
import styled from 'styled-components';
import Title from '../../Components/Title';
import AddressSearch from '../../Components/AddressSearch';

const Container = styled.div`
  text-align: center;
  font-size: 35px;
`;

const Place = styled.div`
  margin: 0 auto;
  margin-top: 50px;
`;
const DayBox = styled.div`
  width: 300px;
  height: 320px;
  border: solid 2px;
  font-weight: bold;
  margin: 0 auto;
  margin-top: 20px;

  align-self: center;
  background: transparent;
  padding: 1rem 1rem;
  transition: all 0.5s ease;
  color: #41403e;
  letter-spacing: 1px;
  outline: none;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
`;

const Temperature = styled.div`
  font-size: 50px;
`;
const Wind = styled.div`
  margin-top: 10px;
  font-size: 30px;
  font-weight: normal;
`;

const Icon = styled.div`
  background-image: url(${props => props.icon});
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center center;
  margin: 10px auto;
`;

const Description = styled.div``;
const Metric = styled.span`
  font-size: 20px;
`;

const Loading = styled.div`
  margin: 20px 0;
  font-size: 60px;
`;

const HomePresenter = ({
  searchTerm,
  placeholder,
  updateTerm,
  handleSubmit,
  description,
  icon,
  temp,
  wind,
  loading,
  name
}) => (
  <Container>
    <Title />
    <AddressSearch
      searchTerm={searchTerm}
      placeholder={placeholder}
      updateTerm={updateTerm}
      handleSubmit={handleSubmit}
    />
    <Place>{name}</Place>
    <DayBox>
      {loading ? (
        <>
          <Loading>Loading NOW..</Loading>
          <Loading>FXXKING..</Loading>
          <Loading>HARD..</Loading>
        </>
      ) : (
        <>
          <Description>{description}</Description>
          <Icon
            icon={`https://s3.ap-northeast-2.amazonaws.com/fxxking-awesome-weather/${icon}.png`}
          />
          <Temperature>{`${temp}°C`}</Temperature>
          <Wind>
            <Metric>wind </Metric>
            {wind}
            <Metric> cm/s</Metric>
          </Wind>
        </>
      )}
    </DayBox>
  </Container>
);

export default HomePresenter;
