import React, { Component } from 'react';
import HouseCard from '../HouseCard/HouseCard';
import './CardContainer.css';

export class CardContainer extends Component {
  render() {
    const house = this.props.initialInfo.map(haus => {
      return <HouseCard haus={haus} />;
    });
    return <div className="cardsholder">{house}</div>;
  }
}
export default CardContainer;
