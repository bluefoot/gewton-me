import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const NavButton = props => {
  const target = props.target || "_blank"

  return (
    <OutboundLink 
        className="wrapper"
        href={props.href}
        rel="noopener"
        target={target}>
      <span className="icon">{props.icon}</span>
      <div className="contents">
        <div className="inner">{props.label}</div>
      </div>
    </OutboundLink>
  )
}

export default NavButton
