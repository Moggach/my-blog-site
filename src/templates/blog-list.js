import React from "react"
import "../pages/globalstyles.css"
import "./blog-list.css"
import avatar from "../images/avatar.jpg"

import { Link } from "gatsby"
import { graphql } from "gatsby"
import Head from "../components/head"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'





const BlogList = (props) => {
  const posts = this.props.data.allMarkdownRemark.edges
    return (
      <div className="container">
      <Head title={props.data.markdownRemark.frontmatter.title}/>
   <div className="sidebar">
   
   <img className="avatar" src={avatar}/>
     <div className="about">
       <p className="title">Anna Cunnane</p>
       <p>Hi! I'm Anna &#128075; I'm an apprentice software developer at <Link to="https://commonknowledge.coop/">Common Knowledge</Link> &#128105;&#8205;&#128187;</p>
         
     </div>


<ul>
<li className="active"><Link to="/">Blog</Link></li>
<li><Link to="/about">About Me</Link></li>
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

    </div>
      )}
export default BlogList

  
