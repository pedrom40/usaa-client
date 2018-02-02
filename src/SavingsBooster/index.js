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

  render () {
    return (
      <section>
        <h2>Savings Booster</h2>
        <p>{this.props.content}</p>
        <Carousel cards={this.props.messages}  />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  content: state.savingsBoosterReducer.content,
  messages: state.savingsBoosterReducer.messages
});

export default connect(mapStateToProps)(SavingsBooster);