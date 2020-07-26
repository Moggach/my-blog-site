import React from "react"
import "./blogtemplate.css"
import avatar from "../images/avatar.jpg"
import github from "../images/github-brands.svg"
import twitter from "../images/twitter-brands.svg"
import linkedin from "../images/linkedin-brands.svg"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Head from "../components/head"

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
      <div className="post-container">

      <div className ="post-title">{props.data.markdownRemark.frontmatter.title}</div>
            <p className="blog-date">{props.data.markdownRemark.frontmatter.date}</p>
            <div className="content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>


      </div>
    
    </div>
    
    );
  }

export default Blog
