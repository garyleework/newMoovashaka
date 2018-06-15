import React from 'react'
import Routes from 'react-static-routes'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'

//


const App = () => (
  <Router>
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav> */}
      <Routes />
    </div>
  </Router>
)

export default hot(module)(App)
