import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { initialFetch } from '../../helpers';
import { addInitialInfo } from '../../actions/initialFetchActions';
import CardContainer from '../CardContainer/CardContainer';

export class App extends Component {
  async componentDidMount() {
    await this.populateCards();
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
          <p>my fingers hurt</p>
        </div>
        <div className="cardsholder">
          <CardContainer initialInfo={this.props.initialInfo} />
        </div>
        <div className="Display-info" />
      </div>
    );
  }
}

App.propTypes = {
  addInitialInfo: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  initialInfo: state.initialInfo
});

export const mapDispatchToProps = dispatch => ({
  addInitialInfo: info => dispatch(addInitialInfo(info))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
