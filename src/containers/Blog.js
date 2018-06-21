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
        <div className="col-lg-4 col-sm-6">
        <ul>
          <h2>
            {posts.map(post => (
              <li key={post.data.slug}>
                <Link to={`/blog/post/${post.data.slug}`}>{post.data.title} {<br />}{<br />}</Link>
                <div className="thumbcontainer">
                  <img className="thumbcontainer image img-fluid" src={post.data.thumbnail} alt="" />
                </div>
              </li>
            ))}
          </h2>
        </ul>
      </div>
    </div>
  </div>
    <div className="clearfix">
      <Footer />
    </div>
  </div>
))
