import React from "react"

import { Link } from "gatsby"
import SEO from "../components/seo"
import styles from "../styles/404.scss"

const NotFoundPage = () => (
  <div id="errorpage">
    <SEO title="404: Not found" />
    <div className="container-fluid">
      <div className="row row-no-gutters justify-content-end align-items-center m-0">
        <div className="col-12 p-0" id="main">
          <h1>Error 404</h1>
          <Link to="/">Go back</Link>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
