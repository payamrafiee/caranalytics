import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import Explore from './Explore';
import SignUp from './SignUp';
import LogIn from './LogIn';
import About from './About';

const Main = props => (
  <div>
    <Switch>
      <Route exact path="/" render={routeProps => <Home {...routeProps} />} />
      <Route
        exact
        path="/explore"
        render={routeProps => (
          <Explore {...routeProps} isAuthenticated={props.isAuthenticated} />
        )}
      />
      <Route exact path="/about" render={routeProps => <About {...routeProps} />} />
      <Route exact path="/signup" render={routeProps => <SignUp {...routeProps} />} />
      <Route exact path="/login" render={routeProps => <LogIn {...routeProps} />} />
    </Switch>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(Main));
