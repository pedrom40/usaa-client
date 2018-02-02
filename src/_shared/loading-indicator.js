import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

export function LoadingIndicator(props) {
  if (props.showHomeLoader || props.showPaycheckPlannerLoader || props.showSavingsBoosterLoader) {
    return (
      <div>
        <p>Loading...</p>
      </div>
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
  showHomeLoader: state.homeReducer.showLoader,
  showPaycheckPlannerLoader: state.paycheckPlannerReducer.showLoader,
  showSavingsBoosterLoader: state.savingsBoosterReducer.showLoader,
});

export default withRouter(connect(mapStateToProps)(LoadingIndicator));