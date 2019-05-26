import axios from 'axios';

const WeatherApi = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  params: {
    appid: '1900bc63322a0b8edfe6240a388b20b3',
    units: 'metric'
  }
});

const PlaceApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/json',
  params: {
    key: 'AIzaSyDFtoiCwAKdL9vPe0YJqzYHEPXUkB6P0aY'
  }
});

export const weatherApi = {
  current: (lat, lon) =>
    WeatherApi.get('weather', {
      params: {
        lat,
        lon
      }
    }),
  week: (lat, lon) =>
    WeatherApi.get('forecast', {
      params: {
        lat,
        lon
      }
    })
};

export const placeApi = {
  search: term =>
    PlaceApi.get('', {
      params: {
        address: encodeURIComponent(term)
      }
    })
};
