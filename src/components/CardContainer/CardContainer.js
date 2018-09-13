import React, { Component } from 'react';
import wolf from './wolf.gif';
import { connect } from 'react-redux';
import HouseCard from '../HouseCard/HouseCard';

export class CardContainer extends Component {
  render() {
    const house = this.props.thronesData.map(haus => {
      return <HouseCard haus={haus} />;
    });
    return <div>{house}</div>;
  }
}

const mapStateToProps = state => ({
  thronesData: state.thronesData
});

export default connect(mapStateToProps)(CardContainer);
