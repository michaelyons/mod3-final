import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { initialFetch } from '../../helpers';
import { addInitialInfo } from '../../actions/initialFetchActions';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  componentDidMount() {
    this.populateCards();
  }

  populateCards = async () => {
    const thronesData = await initialFetch();
    this.props.addInitialInfo(thronesData);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className="Display-info" />
        {<CardContainer thronesData={this.props.thronesData} /> &&
          this.props.thronesData}
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
  addInitialInfo: thronesData => dispatch(addInitialInfo(thronesData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
