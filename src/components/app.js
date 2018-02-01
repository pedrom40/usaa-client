import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './header';
import LoadingIndicator from './loading-indicator';
import Error from './error';
import Home from './home';
import PaycheckPlanner from './paycheck-planner';
import SavingsBooster from './savings-booster';
import Footer from './footer';

export default class App extends React.Component {
  render() {

    const styles = {
      error: {
        color: 'red'
      },
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
          <Error cssStyles={styles.error} />
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