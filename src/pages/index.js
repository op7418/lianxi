import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Learn to <br />design and code React apps</h1>
    <p>Complete courses about the best tools and design
       systems. Prototype and build apps with React and Swift.</p>
    
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/op7418/lianxi.git
// git push -u origin master