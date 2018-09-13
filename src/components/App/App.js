import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className="Display-info" />
        <CardContainer />
      </div>
    );
  }
}

App.propTypes = {
  addInitialInfo: func.isRequired
};
