
import React from "react"
import "../pages/globalstyles.css"
import "../templates/blogtemplate.css"
import avatar from "../images/avatar.jpg"
import gatsbyLogo from "../images/gatsbyjs-icon.svg"
import { Link } from "gatsby"
import Head from "../components/head"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const AboutPage = (props) => {
  return (
    <div className="container">
       <Head title="About"/>
    <div className="sidebar">
    
    <img className="avatar" src={avatar}/>
      <div className="about">
        <p className="title">Anna Cunnane</p>
        <p>Hi! I'm Anna &#128075; I'm an apprentice software developer at <Link to="https://www.foundersandcoders.com/">Founders and Coders</Link> &#128105;&#8205;&#128187;</p>
          
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
     <h3>Hello and thank you for visiting my blog</h3>
     <p>I used to work in book publishing and now I am retraining to become a software developer with Founders and Coders &#x1f4da; </p>
       
        <p>For the past two years I have been learning web development and I built this site using <Link to="https://www.gatsbyjs.com/">Gatsby <img src={gatsbyLogo} style={{width: "20px"}}/></Link></p>
        <p>I am joining the FAC22 cohort at <Link to="https://www.foundersandcoders.com/"></Link>Founders and Coders in September 2021 and in January I will start my apprenticeship at  <Link to="https://commonknowledge.coop/"></Link>Common Knowledge.
        <p>I am passionate about the rights of women and girls and I am also an advisor on the National Domestic Abuse Helpline.</p>
        <p> I am interested in how tech can solve problems for the common good. This blog is about tech topics from a social justice perspective.</p>
  
      Want to get in touch with me? Please use the form below and I will get back to you as soon as I can.
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"  action="/thankyou">
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <div className="field half first">
    <label htmlFor="name"></label>
    <input type="text" name="name" id="name"  placeholder="Name"/>
  </div>
  <div className="field half">
    <label htmlFor="email"></label>
    <input type="text" name="email" id="email" placeholder="Email"/>
  </div>
  <div className="field">
    <label htmlFor="message"></label>
    <textarea name="message" id="message" rows="6" placeholder="Message"/>
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input type="reset" value="Clear" className="special" />
    </li>
  </ul>
  
    </form>






  </p>
    </div>
    </div>
     
       
       
  
    
    );
  }

export default AboutPage
