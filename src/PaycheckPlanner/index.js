import React from 'react';
import {connect} from 'react-redux';
import {fetchPaycheckPlannerContent} from "./actions/index";

import {Carousel} from "../_shared/carousel";
import {fetchPaycheckPlannerNotices} from "./actions";

export class PaycheckPlanner extends React.Component {

  // get content
  componentDidMount(){
    this.props.dispatch(fetchPaycheckPlannerContent());
    this.props.dispatch(fetchPaycheckPlannerNotices());
  };

  render () {
    return (
      <section>
        <h2>Paycheck Planner</h2>
        <p>{this.props.content}</p>
        <Carousel cards={this.props.notices}  />
      </section>
    );
  }
}

Carousel.defaultProps = {
  notices: []
};

const mapStateToProps = state => ({
  content: state.paycheckPlannerReducer.content,
  notices: state.paycheckPlannerReducer.notices
});

export default connect(mapStateToProps)(PaycheckPlanner);