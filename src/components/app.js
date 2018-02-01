import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Switch} from 'react-router-dom';

import Header from './header';
import LoadingIndicator from './loading-indicator';
import Home from './home';
import PaycheckPlanner from './paycheck-planner';
import SavingsBooster from './savings-booster';
import Footer from './footer';

export class App extends React.Component {
  render() {

    const styles = {
      header: {
        h1: {
          position: 'absolute',
          top: 15,
          left: 15
        },
        ul: {
          position: 'absolute',
          top: 32,
          right: 15,
          listStyle: 'none',
          li: {
            display: 'inline-block',
            marginRight: 15
          }
        }
      },
      main: {
        margin: '125px 35px'
      },
      footer: {
        position: 'absolute',
        width: '100%',
        bottom: 15
      }
    };

    return (
      <div>
        <Header cssStyles={styles.header} />
        <main style={styles.main}>
          <LoadingIndicator />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/paycheck-planner" component={PaycheckPlanner} />
            <Route exact path="/savings-booster" component={SavingsBooster} />
          </Switch>
        </main>
        <Footer cssStyles={styles.footer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // hasAuthToken: state.auth.authToken !== null,
  // loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));