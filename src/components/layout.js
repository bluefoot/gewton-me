import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <div className="header-wrapper container-fluid">
        <div className="header-inner row row-no-gutters justify-content-end align-items-center m-0">
          <div className="col-md-6 col-sm-12 p-0">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout
