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
    <section className="blog-post container h-100 align-items-center">
      <div className="row h-100 justify-content-center align-items-center">
        <h1>Just some thoughts....</h1>
        <br />
        <h3>All Posts:</h3>
        <br />
        <div>
          <ul>
            <h3>
              {posts.map(post => (
                <li key={post.data.slug}>
                  <Link to={`/blog/post/${post.data.slug}`}>{post.data.title} {<br />}{<br />}</Link>
                  <div className="thumbcontainer">
                    <img className="img-fluid" src={post.data.thumbnail} alt="" />
                  </div>
                  <br /><br />
                </li>
              ))}
            </h3>
          </ul>
        </div>
      </div>
    </section>
    <div className="clearfix">
      <Footer />
    </div>
  </div>
))
