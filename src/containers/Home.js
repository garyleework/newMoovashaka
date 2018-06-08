import React from 'react'
import { withSiteData } from 'react-static'
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'

export default withSiteData(() => (
  <div>
    <Nav />
    <Main />
    <Footer />
  </div>
))
