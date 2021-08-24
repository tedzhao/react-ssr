import React from 'react'
import { BrowserRouter, StaticRouter, Route, Switch, Link } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'

const NoMatch = () => {
    return (
      <div>
          <h1>404 Not found</h1>
      </div>
    )
}

const AppContent = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export const App = ({IsServer = false, Localtion}) => {
    if (IsServer){
        return <StaticRouter location={Localtion}>
            <AppContent />
        </StaticRouter>
    }

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}