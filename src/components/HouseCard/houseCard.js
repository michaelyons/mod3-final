import React, { Component } from 'react';
import { addMembers } from '../../actions/initialFetchActions';
import { connect } from 'react-redux';


export class HouseCard extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
  }

  handleClick = async members => {
    if (!this.state.members.length) {
      const swornMembers = members.map(async member => {
        let memberId = member.slice(49);
        const response = await fetch(`http://localhost:3001/api/v1/character/${memberId}`);
        const data = await response.json();
        return data;
      })
      const resolved = await Promise.all(swornMembers);
      this.setState({
        members: resolved
      })
    }
  }
  render() {
    const { haus } = this.props;
    const shownSwornMemebers = this.state.members.map(sworn => {
      return <p>{sworn.name}: {sworn.died ? sworn.died : "Not Dead"}</p> || <p></p>
    })
    return (
      <div className='cards'
        onClick={() => this.handleClick(haus.swornMembers)}
      >
        <h1>Name: {haus.name}</h1>
        <p>Seats: {haus.seats}</p>
        <p>Founded: {haus.founded}</p>
        <p>Coat of Arms: {haus.coatOfArms}</p>
        <p>Title: {haus.titles}</p>
        <p>Ancestral Weapons: {haus.ancestralWeapons}</p>
        <p>Words: {haus.words}</p>
        <article>{shownSwornMemebers}</article>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMembers: member => dispatch(addMembers(member))
});

export default connect(
  null,
  mapDispatchToProps
)(HouseCard);


