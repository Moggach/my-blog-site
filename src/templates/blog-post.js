import React from 'react'
import '../pages/globalstyles.css'
import './blog-post.css'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

class BlogPost extends React.Component {
    render() {
        const post = this.props.data.markdownRemark

        return (
            <Layout>
                <Head title={post.frontmatter.title} />
                <div className="post">
                    <div className="post-title">{post.frontmatter.title}</div>
                    <p className="blog-date">{post.frontmatter.date}</p>
                    <p className="time-read"> {post.fields.readingTime.text}</p>
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{
                            __html: post.html,
                        }}
                    ></div>
                </div>
            </Layout>
        )
    }
}

export default BlogPost

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
