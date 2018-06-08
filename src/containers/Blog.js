import React from 'react'
import { withRouteData, Link } from 'react-static'
import BlogNav from './BlogNav.js'
import Footer from './Footer.js'

//

export default withRouteData(({ posts }) => (
  <div>
    <BlogNav />
    <h1>Just some thoughts....</h1>
    <br />
    <h3>All Posts:</h3>
    <ul>
      <h4>
        {posts.map(post => (
          <li key={post.data.slug}>
            <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
          </li>
        ))}
      </h4>
    </ul>
    <Footer />
  </div>
))
