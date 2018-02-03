import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from '../App'
import Page404 from '../404'

const Routes = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route exact path="/app2" component={App} />
        <Route component={Page404} />
      </Switch>
    </Fragment>
  </Router>
)

export default Routes
