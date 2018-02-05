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

  handleButton1Click(e) {

    // split info to get ID and next step
    const objInfo = e.target.id.split('_');

    // if view event
    if (objInfo[2] === 'View') {
      console.log(`Open Event ${objInfo[1]} Modal`);
    }

    // if adding new event
    else if (objInfo[2] === 'AddEvent') {
      console.log(`Add New Event Based on Transaction ${objInfo[1]}`);
    }

    // if contacting staff
    else if (objInfo[2] === 'OpenEmail') {
      console.log(`Open Email About Event ${objInfo[1]}`);
    }

  }

  handleButton2Click(e) {

    // split info to get ID and next step
    const objInfo = e.target.id.split('_');

    // if closing item
    if (objInfo[2] === 'Close') {
      console.log(`Dismiss Notification for Event ${objInfo[1]}`);
    }

    // if closing item
    else if (objInfo[2] === 'Dashboard') {
      console.log(`Dismiss Notification ${objInfo[1]} and go to Dashboard`);
    }

  }

  render () {
    return (
      <section>
        <h2>Paycheck Planner</h2>
        <p>{this.props.content}</p>
        <Carousel cards={this.props.notices} onButton1Click={this.handleButton1Click} onButton2Click={this.handleButton2Click} />
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