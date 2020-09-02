import React from "react"
import "./blogtemplate.css"
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


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
  return (
    <div className="container">
       <Head title={props.data.markdownRemark.frontmatter.title}/>
    <div className="sidebar">
    
    <img className="avatar" src={avatar}/>
      <div className="about">
        <p className="title">Anna Cunnane</p>
        <p>Hi! I'm Anna &#128075; I work in publishing and this is my tech blog &#128105;&#8205;&#128187;</p>
          
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
      <div className="post-container">

      <div className ="post-title">{props.data.markdownRemark.frontmatter.title}</div>
            <p className="blog-date">{props.data.markdownRemark.frontmatter.date}</p>
            <div className="content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>


      </div>
    
    </div>
    
    );
  }

export default Blog
