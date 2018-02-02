import React from 'react';
import {connect} from 'react-redux';
import {fetchPaycheckPlannerContent} from "./actions/index";

export class PaycheckPlanner extends React.Component {
  componentDidMount(){

    // get home content
    this.props.dispatch(fetchPaycheckPlannerContent());

  };

  render () {
    return (
      <section>
        <h2>Paycheck Planner</h2>
        <p>{this.props.content}</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  content: state.paycheckPlannerReducer.content
});

export default connect(mapStateToProps)(PaycheckPlanner);