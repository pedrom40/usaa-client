import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export function Error(props) {

  const error = props.homeError || props.paycheckPlannerError || props.savingsBoosterError;

  if (props.homeError || props.paycheckPlannerError || props.savingsBoosterError) {
    return (
      <h4 style={props.cssStyles}>
        {error}
      </h4>
    );
  }
  else {
    return (
      <span>
      </span>
    );
  }

}

const mapStateToProps = state => ({
  homeError: state.homeReducer.error,
  paycheckPlannerError: state.paycheckPlannerReducer.error,
  savingsBoosterError: state.savingsBoosterReducer.error,
});

export default withRouter(connect(mapStateToProps)(Error));