import React from 'react';
import {connect} from 'react-redux';
import {fetchSavingsBoosterContent} from "./actions/";

import {Carousel} from "../_shared/carousel";
import {fetchSavingsBoosterMessages} from "./actions";

export class SavingsBooster extends React.Component {

  // get content
  componentDidMount(){
    this.props.dispatch(fetchSavingsBoosterContent());
    this.props.dispatch(fetchSavingsBoosterMessages());
  };

  handleButton1Click(e) {

    // split info to get ID and next step
    const objInfo = e.target.id.split('_');

    // if view event
    if (objInfo[2] === 'Clear') {
      console.log(`Dismiss Message ${objInfo[1]}`);
    }

    // if adding new event
    else if (objInfo[2] === 'Activate') {
      console.log(`Activate Service ${objInfo[1]}`);
    }

    // if contacting staff
    else if (objInfo[2] === 'Contact') {
      console.log(`Open Email About Service ${objInfo[1]}`);
    }

  }

  handleButton2Click(e) {

    // split info to get ID and next step
    const objInfo = e.target.id.split('_');

    // if closing item
    if (objInfo[2] === 'Dismiss') {
      console.log(`Dismiss Message ${objInfo[1]} and don't watch`);
    }

    // if closing item
    else if (objInfo[2] === 'Close') {
      console.log(`Close Service ${objInfo[1]} and go to Dashboard`);
    }

  }

  render () {
    return (
      <section>
        <h2>Savings Booster</h2>
        <p>{this.props.content}</p>
        <Carousel cards={this.props.messages} onButton1Click={this.handleButton1Click} onButton2Click={this.handleButton2Click}  />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  content: state.savingsBoosterReducer.content,
  messages: state.savingsBoosterReducer.messages
});

export default connect(mapStateToProps)(SavingsBooster);