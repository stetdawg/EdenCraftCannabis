import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../components/404.css'

const NotFoundPage = () => (
  <Layout>
  <div id="notFound">

    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
