import React from 'react';
import wolf from './wolf.gif';

const CardContainer = () => {
  let houseCard;
  if (!this.thronesData) {
    houseCard = <img src={wolf} alt="wolf gif" />;
  } else {
    houseCard = this.thronesData.data.map(info => (
      <p key={info.id}>{`${info.name}: ${info.name}`}</p>
    ));
  }
  return <div>{houseCard}</div>;
};

export default CardContainer;
