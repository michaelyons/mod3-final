import React, { Component } from 'react';
import wolf from './wolf.gif';
import { connect } from 'react-redux';
import houseCard from '../HouseCard/houseCard';
import { addInitialInfo } from '../../actions/initialFetchActions';
import { initialFetch } from '../../helpers';

class CardContainer extends Component {
  componentDidMount = async () => {
    const thronesData = await initialFetch();
    this.props.addInitialInfo(thronesData);
  };

  render() {
    return <div>{houseCard}</div>;
  }
}

const mapStateToProps = state => ({
  thronesData: state.thronesData
});

const mapDispatchToProps = dispatch => ({
  addInitialInfo: info => dispatch(addInitialInfo(info))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
