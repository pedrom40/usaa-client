import React from 'react';
import {connect} from 'react-redux';
import {fetchHomeContent} from "../actions/home";

export class Home extends React.Component {
  componentDidMount(){

    // get home content
    this.props.dispatch(fetchHomeContent());

  };

  render () {
    return (
      <section>
        <h2>Home</h2>
        <p>{this.props.content}</p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  content: state.homeReducer.content
});

export default connect(mapStateToProps)(Home);