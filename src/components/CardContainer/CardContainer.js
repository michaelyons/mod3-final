import React, { Component } from 'react';
import HouseCard from '../HouseCard/HouseCard';

export class CardContainer extends Component {
  render() {
    const house = this.props.initialInfo.map(haus => {
      return <HouseCard haus={haus} />;
    });
    return <div>{house}</div>;
  }
}

export default CardContainer;
