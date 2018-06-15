import React from 'react'
import { withRouteData, Link } from 'react-static'
import BlogNav from './BlogNav.js'
import Footer from './Footer.js'

//

export default withRouteData(({ posts }) => (
  <div>
    <div>
      <BlogNav />
    </div>
    <div className="blog-post container-fluid float left clearfix">
      <div className="row">
        <h1>Just some thoughts....</h1>
        <br />
        <h3>All Posts:</h3>
        <br />
        <ul>
          <h4>
            {posts.map(post => (
              <li key={post.data.slug}>
                <Link to={`/blog/post/${post.data.slug}`}>{post.data.title} {<br />}{<br />}</Link>
              </li>
            ))}
          </h4>
        </ul>
      </div>
    </div>
    <div className="clearfix">
      <Footer />
    </div>
  </div>
))
