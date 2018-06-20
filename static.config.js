import React, { Component } from 'react'

const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')


function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/posts')) {
      klaw('./src/posts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

export default {

  siteRoot: 'https://optimistic-snyder-4c0bcc.netlify.com',

  getSiteData: () => ({
    title: 'MoovaShaka WebApp',
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: async (render, Comp, meta) => {
    const html = render(<Comp />)
    return html
  },
  Document: class CustomDocument extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
            <title>MoovaShaka || Web Development || WebApp Development || Optimisation || Reactjs || Bespoke Web Design</title>
            {/* Bootstrap Core CSS */}
            <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            {/* Custom Fonts */}
            <link href="/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic" rel="stylesheet" type="text/css" />
            {/* Plugin CSS */}
            <link href="/vendor/magnific-popup/magnific-popup.css" rel="stylesheet" />
            {/* Theme CSS */}
            <link href="/css/creative.min.css" rel="stylesheet" />
            {/* Additional CSS goes here */}
            <link href="/css/form.min.css" rel="stylesheet" />
          </Head>
          <Body>
            {children}
            <noscript>
  You need to enable JavaScript to run this app.
            </noscript>
            {/* Netlify ghost form */}
            <form name="contactForm" netlify netlify-honeypot="bot-field" hidden>
              <input name="inputName" type="text" />
              <input name="inputEmail" type="email" />
              <input name="inputCompany" type="text" />
              <select name="select">
                <option value="other">Something else</option>
                <option value="Brochure">A brochure site</option>
                <option value="e-commerce">An e-commerce site</option>
                <option value="content managed">Content-Managed site (like Wordpress)</option>
                <option value="modifying">Modifying an existing App/Site</option>
                <option value="custom">Custom React Components</option>
                <option value="traffic">Traffic generation</option>
              </select>
              <textarea name="message" />
            </form>
            <script src="/vendor/jquery/jquery.min.js" />
            <script src="/js/creative.min.js" />
            <script src="/js/jquery.easing.min.js" />
            <script src="/vendor/bootstrap/js/bootstrap.min.js" />
          </Body>
        </Html>
      )
    }
  },
}
