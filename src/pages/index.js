import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation/navigation"
import Header from "../components/header"
import config from "../../config"

const IndexPage = () => (
  <Layout>
    <SEO keywords={config.defaultKeywords} />
    <Header />
    <main className="navigation-wrapper">
      <Navigation />
    </main>
  </Layout>
)

export default IndexPage
