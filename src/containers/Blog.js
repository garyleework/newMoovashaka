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
          <h3>Posts:</h3>
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
          <hr />
          <p className="pt-md-4 pt-lg-4">
            This is a place for latest news and trends, where we like to keep customers old & new informed of trends within the ever
            evolving industry of the internet.
          </p>
          <p>
            Here you will find articles &amp; discussions surrounding the Web Development universe - we'll touch on security
            too, which needs an ever vigilant eye, of course.
          </p>
          <p>
            And the uniquely
            interlinked but technically slightly removed world of Search Engine Optimisation. We hope
            you will find these articles useful, informative and thought provoking.
          </p>
          <p>
            This blog is powered by the wonderfully lightweight Netlify CMS, which means easy article publishing and
            image uploads, even for those less technically inclined.
          </p>
          <p>
            Choosing Netlify's CMS because has some real advantages in terms of speed, thanks in many ways to the fact that it doesn't
            use a traditional database to store the content which the blog serves, in other words the Blog's 'posts'.
            We'd be only too glad to help you migrate from bloated resource heavy traditional Blogging platforms (such as Wordpress), to a newer
            more dynamic platform like Netlify. Your SEO will thank you for it!
          </p>
        </div>
      </div> {/* End Row */}
    </section>
    <div className="clearfix">
      <Footer />
    </div>
  </div>
))
