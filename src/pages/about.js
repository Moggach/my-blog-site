import React from "react"
import "./globalstyles.css"
import "./about.css"
import avatar from "../images/avatar.jpg"
import github from "../images/github-brands.svg"
import twitter from "../images/twitter-brands.svg"
import linkedin from "../images/linkedin-brands.svg"
import { Link } from "gatsby"
import Head from "../components/head"

  const AboutPage = function() {
    return (
     
      <div className="container">
        <Head title="About"/>
      <div className="sidebar">
      
      <img className="avatar" src={avatar}/>
        <div className="about">
          <p className="title">Anna Cunnane</p>
          <p>Pellentesque odio nisi, euismod in, pharetra a
            ultricies in, diam. Sed arcu. </p>
        </div>

 
  <ul>
  <li><Link to="/">Blog</Link></li>
   <li><Link to="/about">About Me</Link></li>
  </ul>

        <a href="https://twitter.com/MollyBloom1989" target="_blank">
          <img className="social-icons" src={twitter} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/annacunnane/" target="_blank">
          <img className="social-icons" src={linkedin} alt="" />
        </a>
        <a href="https://github.com/Moggach" target="_blank">
          <img className="social-icons" src={github} alt="" />
        </a>
        <div className="copyright">@ All Rights Reserved</div>
        </div>
       <div className="about-text">Lorem ipsum dolor sit amet, ad soleat ancillae insolens sed. Usu et invidunt constituto deseruisse. Partem mucius nemore at vel. Eu veri signiferumque vim. Omnes oportere duo ad, quo unum ceteros percipit ea. Nec sensibus disputationi ut. Nam te option molestie, populo bonorum dissentias no vix.

Per mediocrem argumentum ei, sed cu solet concludaturque. Per ut exerci oporteat liberavisse. In eos enim nostro aliquip, mucius probatus no has. Agam expetenda eu mel. Cum tota incorrupte cu, convenire delicatissimi id mea, cum quaeque elaboraret te.</div>
      
      </div>
     
      

   
    )
  }

export default AboutPage
