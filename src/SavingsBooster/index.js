import React from 'react';
import {connect} from 'react-redux';
import {fetchSavingsBoosterContent} from "./actions/";

export class SavingsBooster extends React.Component {
  componentDidMount(){

    // get home content
    this.props.dispatch(fetchSavingsBoosterContent());

  };

  render () {
    return (
      <section>
        <h2>Savings Booster</h2>
        <p>{this.props.content}</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  content: state.savingsBoosterReducer.content
});

export default connect(mapStateToProps)(SavingsBooster);