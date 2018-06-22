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
        <div className="col-sm-4">
          <h3>All Posts:</h3>
          <div>
            <ul>
              <h3>
                {posts.map(post => (
                  <div className="thumbcontainer">
                     <li key={post.data.slug}>
                      <Link to={`/blog/post/${post.data.slug}`}><h3>{post.data.title}</h3></Link> {/* link to Post title */}
                      <Link to={`/blog/post/${post.data.slug}`}><img className="img-fluid" src={post.data.thumbnail} alt="" /></Link> {/* link to Post thumbnail */}
                    </li>
                  </div>
              ))}
              </h3>
            </ul>
          </div>
        </div> {/* End Col */}
        <div className="col-sm-8">
          <h1>This is our Blog</h1>
          <p>
            This is a space where we like to keep customers old & new informed of trends within this ever
            evolving industry of the internet.
            <br />
            <br />
            Here you will find articles &amp; discussions surrounding the Web Development universe - we'll touch on security
            too, which needs an ever vigilant eye, of course!
            <br />
            <br />
            And the uniquely
            interlinked but technically slightly removed world of Search Engine Optimisation. We hope
            you will find these articles useful, informative and thought provoking.
            <br />
            <br />
            This blog is powered by the wonderfully lightweight Netlify CMS, which means easy article publishing and
            image uploads, even for those less technically inclined!
            <br />
            <br />
            We chose Netlify's CMS because it has some real advantages in terms of speed, thanks in many ways to the fact that it doesn't
            use a traditional database to store the content which the blog serves i.e. the posts.


          </p>
        </div>
      </div> {/* End Row */}
    </section>
    <div className="clearfix">
      <Footer />
    </div>
  </div>
))
