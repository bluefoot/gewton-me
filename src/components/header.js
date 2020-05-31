import React from "react"
import portrait from "../images/gewton-portrait.jpg"

const Header = () => (
  <>
    <header className="index-header">
      <div className="top-text">All about</div>
      <h1>Gewton Teixeira</h1>
      <div className="subtitle">Software Engineer in Kitchener, Canada</div>
    </header>
    <img
      className="portrait rounded-circle"
      alt=""
      role="presentation"
      src={portrait}
    />
  </>
)

export default Header
