/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import edenlogo from "../images/logos/EDEN_HOMEPAGE_JULY_20_0002s_0001_ICON.png"
import keepInTouch from "../images/EDEN_HOMEPAGE_JULY_20_0002s_0005_Keep-in-Touch.png";
import inbox from "../images/EDEN_HOMEPAGE_JULY_20_0002s_0004_Keep-your-inbox-happy-filled-with-event-invitations,-new-produc.png";
import youtube from "../images/logos/youtube.png";
import instagram from "../images/logos/Instagram_Glyph_White.png";
import linkedIn from "../images/logos/linked in.png";
import twitter from "../images/logos/2021 Twitter logo - white.png";
import facebook from "../images/logos/f_logo_RGB-White_144.png";
import Header from "./header"
import "./layout.css"

const moreLinks = [
  { text: "Shop", url: "/" },
  {
    text: "Our Story",
    url: "/",
  },
  {
    text: "FAQ",
    url: "/",
  }
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      
      <div className="entrypoint"
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          padding: `0`,
          //textAlign: 'start'

        }}
      >
        <main id="main" className="disable">{children}</main>

      </div>
      <footer
          style={{
            fontSize: `var(--font-sm)`,
            backgroundColor: `#3E3D3B`,
            position:`inherit`,
             bottom:`0`,
             display: `grid`,
             gridTemplateColumns: `repeat(2, 1fr)`,
             gridTemplateRows: `repeat(3, auto)`,
             padding: `3vh 10%`,
             fontFamily:`Arial Rounded MT Bold, sans-serif`,
              fontWeight: `700`, 
              fontStyle: `normal`,
              lineHeight:`initial`,
              

          }}
        >


        <img
          src={edenlogo}
          alt="Eden Logo"
          height={65}
          style={{ margin: 0,  gridArea: `1/1`, width: `10%`, height:`auto`, alignSelf:`center`, }}
        />
        <div style={{gridArea:`1/1`, display:`flex`, flexDirection:`column`, alignSelf:`center`, textAlign:`initial`, justifySelf:`baseline`, transform: `translate(100%, 0%)`,}}>
        {moreLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={`${link.url}`}>{link.text}</a>
            {i !== moreLinks.length - 1 && <></>}
          </React.Fragment>
        ))}
        </div>

        <div style={{gridArea:`2/1`,paddingRight:`10%`, textAlign:`initial`, fontSize:`smaller` }}>
            LICENSE NUMBER HERE{` `}<br/>
            Eden Craft Cannabis Terms & Conditions & Privacy Policy<br/>
        </div> 
          
        <div style={{alignItems:`baseline`, WebkitAlignItems:`baseline`,display: "flex", flexDirection:"column", justifySelf: 'flex-start', padding: '10% 10% 0 0',}}>
            <h1
                style={{gridArea:`1/2`, height:29, margin: `0 0 5% 0`, float: `left`, alignItems:`baseline`, WebkitAlignItems: `baseline`}}
            >
                Keep In Touch
          </h1>
            <p
                style={{height:`auto`,  fontFamily:`Arial Rounded MT Bold, sans-serif`, fontSize: `80%`, textAlign: `-webkit-left`,}}
              >
                Keep your inbox happy filled with event invitations, new product releases, and occasional sales.
                </p>
          </div>
            
        <div>
          <input placeholder="Your Email Address..." type="text" id="fname" name="fname" style={{float: `left`}}/><br/>
          </div>

        <div id="socialFooter" style={{
            display: 'flex',
            gridColumn: '1 / 3',
            width: '50%',
            height: 'fit-content',
            justifySelf: 'center',
            justifyContent: 'space-evenly'}}>
            <a href="/"><img
              src={youtube}
              alt=""
              height={25}

            /> </a>    
            <a href="/"><img
              src={instagram}
              alt=""
              height={25}
              style={{}}

            /> </a>    
            <a href="/"><img
              src={linkedIn}
              alt=""
              height={25}
              style={{}}

            /> </a>    
            <a href="/"><img
              src={twitter}
              alt=""
              height={25}
              style={{}}

            /> </a>    
            <a href="/"><img
              src={facebook}
              alt=""
              height={25}
              style={{}}

            /> </a>    
        </div>
          
        <div style={{justifySelf:`end`,gridColumn:`2/3` }}>
          © {new Date().getFullYear()}
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
