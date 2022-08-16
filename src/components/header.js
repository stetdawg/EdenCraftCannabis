import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import edenlogo from "../images/logos/EDEN_HOMEPAGE_JULY_20_0002s_0001_ICON.png"


const Links = [
  {text:"Home", url: "/"},
  {text:"Menu", url: "/"},
  {text:"Shop", url: "/"},
  {text:<img alt='Eden logo' height={50} style={{ margin: 0 }} src={edenlogo} />, url: "/"},
  {text:"Club", url: "/"},
  {text:"About", url: "/"},
  {text:"More", url: "/"},

  
]    


const Header = ({ siteTitle }) => (
  <header
   id="desktopHeader" style={{
      margin: `0 auto`,
      alignItems: `center`,
      WebkitAlignItems: `center`,
      justifyContent: `space-between`,
      WebkitJustifyContent: `space-between`,
      backgroundColor:`#3E3E3E`, 
      fontSize: `2.3vh`,

    }}
  >
<div id="navBar" style={{listStyleType: `none`, display:`flex`, justifyContent:`space-around`, WebkitJustifyContent: `space-around`,alignItems:`center`, WebkitAlignItems:`center`}}>


  {Links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
          </React.Fragment>
        ))}</div>
    <Link
      to="/"
      style={{

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
