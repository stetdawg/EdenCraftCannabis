import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import edenlogo from "../images/logos/EDEN_HOMEPAGE_JULY_20_0002s_0001_ICON.png"


const Links = [
  {text:"Home", url: "#html"},
  {text:"Menu", url: "#menu"},
  {text:"Shop", url: "#locationsHeader"},
  {text:<img 
    alt='Eden logo' 
    height={50} 
    style={{ 
    margin: '0',
    height: 'auto',
    maxWidth: '60%'}} 
    src={edenlogo} />,
  url: "/"},
  {text:"Club", url: "/ss"},
  {text:"About", url: "#high"},
  {text:"More", url: "/s"},

  
]    


const Header = ({ siteTitle }) => (
  <header
   id="desktopHeader" 
   style={{
      margin: `0 auto`,
      alignItems: `center`,
      WebkitAlignItems: `center`,
      justifyContent: `space-between`,
      WebkitJustifyContent: `space-between`,
      backgroundColor:`#3E3E3E`, 
  }}>
  <div id="navBar" style={{
    listStyleType: `none`, 
    display:`flex`, 
    justifyContent:`space-around`, 
    WebkitJustifyContent: `space-around`,
    alignItems:`center`, 
    WebkitAlignItems:`center`
  }}>

  {Links.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
          </React.Fragment>
        ))}</div>
  <Link
    to="/"
    style={{
      textDecoration: `none`,
    }}>
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
