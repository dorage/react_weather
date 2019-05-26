import React from 'react';
import HomePresenter from './HomePresenter';
import { placeApi, weatherApi } from '../../api';

export default class extends React.Component {
  state = {
    searchTerm: '',
    placeholder: '',
    name: '',
    temp: 21,
    wind: 50,
    icon: '01d',
    description: 'sunny day',
    loading: true
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    event.preventDefault();
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results }
      } = await placeApi.search(searchTerm);
      if (!results.length) {
        this.setState({
          searchTerm: '',
          placeholder: `can't find ${searchTerm}`
        });
        return;
      }
      const {
        0: {
          geometry: {
            location: { lat, lng }
          }
        }
      } = results;
      this.getWeather(lat, lng);
      this.setState({ searchTerm: '', placeholder: searchTerm });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  getWeather = async (lat, lng) => {
    try {
      const {
        data: {
          weather: {
            0: { description, icon }
          },
          main: { temp },
          wind: { speed },
          name
        }
      } = await weatherApi.current(lat, lng);
      this.setState({
        description,
        icon,
        temp,
        wind: speed,
        name
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      searchTerm,
      placeholder,
      description,
      icon,
      temp,
      wind,
      loading,
      name
    } = this.state;
    return (
      <HomePresenter
        searchTerm={searchTerm}
        placeholder={placeholder}
        updateTerm={this.updateTerm}
        handleSubmit={this.handleSubmit}
        description={description}
        icon={icon}
        temp={temp}
        wind={wind}
        loading={loading}
        name={name}
      />
    );
  }
}
