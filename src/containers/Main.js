import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from './Home';

const Main = () => (
  <div>
    <Switch>
      <Route exac path='/' render={props => <Home {...props} />}  />
    </Switch>
  </div>
)

const mapStateToProps = state => ({
  filter: state.filter
})

export default withRouter(connect(mapStateToProps)(Main))
