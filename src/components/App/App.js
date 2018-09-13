import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import { addInitialInfo } from '../../actions/initialFetchActions';

import { initialFetch } from '../../helpers';
class App extends Component {
  componentDidMount = async () => {
    const thronesData = await initialFetch();
    this.props.addInitialInfo(thronesData);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
          <button
            onClick={() => {
              this.props.thronesData;
              alert(this.props.thronesData);
            }}
          >
            {' '}
            Real Info
          </button>
        </div>
        <div className="Display-info" />
        <CardContainer thronesData={this.props.thronesData} />
      </div>
    );
  }
}

App.propTypes = {
  addInitialInfo: func.isRequired
};

const mapStateToProps = state => ({
  thronesData: state.thronesData
});

const mapDispatchToProps = dispatch => ({
  addInitialInfo: info => dispatch(addInitialInfo(info))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
