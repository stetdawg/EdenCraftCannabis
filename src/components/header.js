import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import edenlogo from "../images/logos/EDEN_HOMEPAGE_JULY_20_0002s_0001_ICON.png"


const Links = [
  {text:"Home", url: "/"},
  {text:"Menu", url: "/"},
  {text:"Shop", url: "/"},
  {text:<img alt='Eden logo' height={65} style={{ margin: 0 }} src={edenlogo} />, url: "/"},
  {text:"Club", url: "/"},
  {text:"About", url: "/"},
  {text:"More", url: "/"},

  
]    


const Header = ({ siteTitle }) => (
  <header
   id="desktopHeader" style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor:`#3E3E3E`, 
      fontSize: `1.75553434vh`,

    }}
  >
<div id="navBar" style={{listStyleType: `none`, display:`flex`, justifyContent:`space-around`, alignItems:`flex-end`}}>


  {Links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
          </React.Fragment>
        ))}</div>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
    </Link>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
