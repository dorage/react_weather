import React from 'react';
import GlobalStyles from './GlobalStyles';
import Geolocate from './Geolocate';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Geolocate />
      <GlobalStyles />
      <Footer />
    </>
  );
};

export default App;
