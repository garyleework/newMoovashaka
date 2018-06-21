import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import BlogNav from './BlogNav.js'
import Footer from './Footer.js'
//

export default withRouteData(({ post }) => (
  <div>
    <BlogNav />
    <div className="blog-post">
      <br />
      <Link to="/blog">{'<'} Back</Link>
      <br />
      <h3>{post.data.title}</h3>
      <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
      <br />
      <br />
      <img className="image img-fluid" src={post.data.thumbnail} alt="" />
      <br />
      <br />
      <Markdown source={post.content} escapeHtml={false} />
    </div>
    <Footer />
  </div>
))
