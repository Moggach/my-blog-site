import React from 'react'
import "./bloglist.css"

import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"

const BlogList = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              title
            }
            excerpt
          }
        }
      }
    }
    
    
    
    `)

    return (
          <div className="border">
           
            <ul className="blog-list">
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                                <div className="blog-date">{edge.node.frontmatter.date}</div>
                                <div className="blog-title">{edge.node.frontmatter.title}</div>
                                <div className="blog-blurb">{edge.node.excerpt}</div>
                                <Link to={`/blog/${edge.node.fields.slug}`}><div className="read-more">Read More</div></Link>
                            
                        </li>
                    )
                })}
            </ul>
            </div>
    )
}

export default BlogList

  
