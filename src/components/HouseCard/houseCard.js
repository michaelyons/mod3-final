import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HouseCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.haus.name}</h1>
        <p>{this.props.haus.seats}</p>
        <p>{this.props.haus.founded}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  haus: state.addInitialInfo
});

export default connect(mapStateToProps)(HouseCard);
