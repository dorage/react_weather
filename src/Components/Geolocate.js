/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { geolocated } from 'react-geolocated';
import Home from '../Routes/Home';

class Demo extends React.Component {
  render() {
    const { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;

    return !isGeolocationAvailable || !isGeolocationEnabled || !coords ? (
      <Home />
    ) : (
      <Home latitude={coords.latitude} longitude={coords.longitude} />
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Demo);
