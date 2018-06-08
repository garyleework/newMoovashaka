import React from 'react'
import Routes from 'react-static-routes'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import BlogNav from './containers/BlogNav.js'
//


const App = () => (
  <Router>
    <div>
      <BlogNav />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      {/* <div className="container">
        <div className="row"> */}
          <Routes />
        </div>
      {/* </div> */}
    {/* </div> */}
  </Router>
)

export default hot(module)(App)
