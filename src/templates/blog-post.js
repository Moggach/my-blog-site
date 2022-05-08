import React from 'react'
import '../pages/globalstyles.css'
import './blog-post.css'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
            fields {
                readingTime {
                    text
                }
            }
        }
    }
`
const BlogPost = (props) => {
    return (
        <Layout>
            {/* <Head title={props.data.markdownRemark.frontmatter.title} />
            <div className="post">
                <div className="post-title">
                    {props.data.markdownRemark.frontmatter.title}
                </div>
                <p className="blog-date">
                    {props.data.markdownRemark.frontmatter.date}
                </p>
                <p className="time-read">
                    {' '}
                    {props.data.markdownRemark.fields.readingTime.text}
                </p>
                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                        __html: props.data.markdownRemark.html,
                    }}
                ></div>
            </div> */}
        </Layout>
    )
}

export default BlogPost
