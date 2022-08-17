import * as React from "react"
import { useState } from "react"
import { Link, Script } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import img1 from "../images/EDEN_HOMEPAGE_JULY_20_0003s_0002_bandana-photo.png";
import img2 from "../images/EDEN_HOMEPAGE_JULY_20_0003s_0001_rolling-photo.png";
import img3 from "../images/EDEN_HOMEPAGE_JULY_20_0001s_0004_its-420-somewhere.png";
import img4 from "../images/logos/EDEN_HOMEPAGE_JULY_20_0005s_0002_grey-circle.png";
import img5 from "../images/logos/EDEN_HOMEPAGE_JULY_20_0001s_0001_high.png";
import img6 from "../images/logos/EDEN_HOMEPAGE_JULY_20_0005s_0001_leafly-logo.png";
import img7 from "../images/text small.png";
import img8 from "../images/logos/EDEN_HOMEPAGE_JULY_20_0001s_0002_locations.png";
import img9 from "../images/logos/EDEN_HOMEPAGE_JULY_20_0006s_0000_ICON.png"
import img10 from "../images/EDEN_HOMEPAGE_JULY_20_0001s_0000_location-blob.png";
import img11 from "../images/EDEN_HOMEPAGE_JULY_20_0003s_0000_smile-photo.png";
import img12 from "../images/EDEN_HOMEPAGE_JULY_20_0005s_0000_CONTACT-US.png";
import ageGateimg from '../images/Background/21_POPUP.png';
import yesButton from '../images/yes.png';

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const links = [
  {
    text: "Roseway Location",
    url: "/",
    description:
      "7420 NE Sandy Blvd \n Portland, Oregon",
  },
  {
    text: "Salem Location",
    url: "/",
    description:
      "4618 Portland RD \n Salem, Oregon"
  },
  {
    text: "Buckman Location",
    url: "/",
    description:
      "128 SE 12th Avenue \n Portland, Oregon"
  },
  {
    text: "Foster Location",
    url: "/",
    description:
      "141142 SE 60th Avenue \n Portland, Oregon"
  },
  {
    text: "PDX Location",
    url: "/",
    description:
      "11309 NE Holman St \n Portland, Oregon"
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]


const keepInTouch = [
  { text: "Keep In Touch" },
  {
    text: "Keep your inbox happy, filled with event invitations, new product releases, and occasional sales.",
  },
  {
       //TODO FORM
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const Gate = (params) => {
  const ageGate = document.getElementById("ageGate")
  ageGate.remove()
  const overlay = document.getElementById("main")
overlay.classList.remove("disable")
  const overflow = document.documentElement
}


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div id="ageGate" className={`ageVerification`}>
            <img draggable="false" src={ageGateimg} alt="Age Gate 21 years or older" />
               <button id="yesButton" ><img draggable="false" src={yesButton} 
             alt="Yes to Enter" onClick={Gate} ></img></button>
                    <a id="noButton" href="https://www.google.com" >
                     <span id="centerButtonText">NO NOT YET...</span>
                  </a>
                    </div>
        
    <StaticImage
        src="../images/logos/EDEN_HOMEPAGE_JULY_20_0002s_0000_logo.png"
        loading="eager"
        placeholder="none"
        quality={50}
        maxWidth={100}
        className="imageWrapper"
        formats={["auto", "webp"]}
        alt="Eden Logo"
        style={{textAlign: ''}}
        imgStyle={{position: `relative`, paddingTop:`-10em`}}
      />
<div id="box1" style={{display: `flex`, justifyContent: `space-between`, 
  marginTop:`10vh`,}}>
  <div style={{display:"grid", position:`relative`, gridArea:`1/1`, width:`max-content`, marginTop: `2em`,}}>

    <img 
draggable="false"
      className={`fourtwentysomewhere`} 
      alt='Hero 3' 
      style={{ 
        position: `absolute`,
        gridArea: `1/1/1/1`,
        justifySelf: `end`,
        transform: `translate(15%,10%)`,
        width: `60%`,
        height:`auto`,
         }} 
      src={img3}/>
    <img 
    draggable="false"
      className={`smoking`} 
      alt='Hero 1' 
      height={936} 
      style={{ 
        position: `relative`,
        gridArea: `1/1/1/1`,
        height: `auto`,
        float: `left`,
        top: `-3vh`,
    }} 
      src={img1}/>
         <img 
         draggable="false"
      className={`high`} 
      id={`high`} 
      alt='Hero 5' 
      height={42} 
      style={{ 
        position: `relative`,
        justifySelf: `center`,
        transform: `translate(-100%, 100%)`,
        width: `20%`,
        height: `auto`,
        top: `0`,
        left: `0`,
        zIndex:`500`,
          }} 
      src={img5}/>
  </div>
  <div style={{display:"grid", position:`relative`, gridArea:`1/1`, width:`max-content`, transform: `translate(-10%, 10%)`,
  }}>

<a href="/">
    <img 
    draggable="false"
      className={`greyCircle`} 
      id={`menu`}
      alt='Hero 4' 
      height={328} 
      style={{ 
        position: `relative`,
        width: `25vw`,
        height: `auto`,
        gridArea: `1/1/1/1`,

        }} 
      src={img4}>
    </img>   </a>
    <img 
    draggable="false"
      className={`leaflyLogo`} 
      alt='Hero 6' 
      height={47} 
      style={{ 
        position: `absolute`,
        width: `15vw`,
        height: `auto`,
        gridArea: `1/1/1/1`,
        // top: `50%`,
        // left: `50%`,
        transform: `translate(35%, 240%)`,
        }} 
      src={img6}>
    </img>
 
  </div>
  </div>


  <div id="box3" style={{display:"grid", gridTemplateColumns:`auto auto`, gridAutoRows:`auto`,alignItems:`flex-end`,WebkitAlignItems:`flex-end`, justifyItems:`center`,marginTop: `10%`}}>
 
    <img 
    draggable="false"
      className={`rolling`} 
      alt='Hero 2' 
      height={838} 
      style={{ 
        position: `relative`,
        gridArea:`1/2`,
        justifySelf: `end`,
        height: `auto`,
        top:`0`,
        left:`0`,
        float:`left`,
        zIndex:`501`,
        transform:` translate(0%, -70%)`,

    }} 
      src={img2}/>
   <div style={{width:`100%`, alignSelf: `flex-start`, WebkitAlignSelf: `flex-start`, gridArea: `1/1`, display:`flex`, flexDirection:`column`,

}}>
    <img 
    draggable="false"
      className={`copyText`} 
      alt='Hero 7' 
      height={498} 
      style={{ 
        position: `relative`,
        height: `auto`,
        padding: `0 10%`,
        width: '80%',
        top:`0`, 
        zIndex:`499`,
          }} 
      src={img7}/>
    <img 
    draggable="false"
      className={`icon`} 
      alt='Hero 9' 
      height={63} 
      style={{ 
        position: `relative`,
        alignSelf: 'center',
        WebkitAlignSelf: `center`,
        transform: `translate(-100%, 50%)`,
        maxWidth: `10%`,
        height: `auto`,
        zIndex:`503`,
          }} 
      src={img9}/>
    
   </div>
    
    <img 
      className={`locationsHeader`} 
      id={`locationsHeader`} 
      draggable="false"
      alt='Hero 8' 
      height={64} 
      style={{ 
        position: `relative`,
        alignSelf:`center`,
        WebkitAlignSelf: `center`,
        width: `50%`,
        height: `auto`,
        top:`0`, 
        gridArea:`1/2`,
        zIndex:`502`,
          }} 
      src={img8}/>



    <img 
    draggable="false"
      className={`locations`} 
      id={`locations`}
      alt='Hero 10' 
      height={64} 
      style={{ 
        position: `relative`,
        alignSelf: `flex-start`,
        WebkitAlignSelf: `flex-start`,
        maxWidth: `50%`,
        height: `auto`,
        transform: `translate(0%,-20%)`,
        top:`0`, 
        gridArea:`2/2`,
        zIndex:`504`,
          }} 
      src={img10}/>

    <img 
    draggable="false"
      className={`smile`} 
      alt='Hero 11' 
      height={1407} 
      style={{ 
        position: `relative`,
        justifySelf:`flex-start`,
        maxWidth: `90%`,
        height: `auto`,
        top:`0`, 
        gridArea:`2/1`,
        zIndex:`505`,
          }} 
      src={img11}/>

    <a href="/" style={{gridArea:`2/2`,transform: `translate(-30%,-100%)`,
}}>
    <img 
    draggable="false"
      className={`contactButton`} 
      alt='Hero 12' 
      height={140} 
      style={{ 
        position: `relative`,
        maxWidth: `100%`,
        height: `auto`,
        alignSelf:`flex-end`,
        WebkitAlignSelf: `flex-end`,
        top:`0`, 
        zIndex:`505`,
          }} 
      src={img12}/></a>
  </div>
 </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
