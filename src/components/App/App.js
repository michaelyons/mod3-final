import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addInitialInfo } from '../../actions/initialFetchActions';

import { initialFetch } from '../../helpers';
class App extends Component {
  componentDidMount = async data => {
    await initialFetch(data);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Westeros</h2>
          <button
            onClick={() => {
              this.props.addInitialInfo();
              alert(this.props.addInitialInfo);
            }}
          >
            {' '}
            Real Info
          </button>
        </div>
        <div className="Display-info" />
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

// const mapStateToProps = (state) => ({
//   state.initialInfo
// });

const mapDispatchToProps = dispatch => ({
  addInitialInfo: info => dispatch(addInitialInfo(info))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
