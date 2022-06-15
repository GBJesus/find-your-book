import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { Home, Books, Favorites } from '../containers'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book/:id" component={Books} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  )
}

export default Routes
