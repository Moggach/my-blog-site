
import React from "react"
import "./globalstyles.css"
import "./about.css"
import avatar from "../images/avatar.jpg"

import { Link } from "gatsby"
import Head from "../components/head"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

  const ThankYouPage = function() {
    return (
     
      <div className="container">
        <Head title="About"/>
      <div className="sidebar">
     
      <img className="avatar" src={avatar}/>
        <div className="about">
          <p className="title">Anna Cunnane</p>
          <p>Hi! I'm Anna &#128075; I'm an apprentice software developer at <Link to="https://commonknowledge.coop/">Common Knowledge</Link> &#128105;&#8205;&#128187;</p>
          
        </div>

 
  <ul>
  <li><Link to="/">Blog</Link></li>
   <li className="active"><Link to="/about">About Me</Link></li>
  </ul>

  <a href="https://twitter.com/MollyBloom1989" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icons" icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/annacunnane/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icons" icon={faLinkedin}  />
        </a>
        <a href="https://github.com/Moggach" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="icons" icon={faGithub}  />
        </a>
        <div className="copyright">@ All Rights Reserved</div>
        </div>
       <div className="content">
         
    
    <p>Thank you for your submission!</p>
 
        </div>
        </div>
    );
        }

export default ThankYouPage
