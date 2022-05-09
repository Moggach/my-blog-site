import React from 'react'
import '../pages/globalstyles.css'
import './blog-post.css'
import { Link, graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

class BlogPost extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const { previous, next } = this.props.pageContext

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

                <ul>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                Prev {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} Next
                            </Link>
                        )}
                    </li>
                </ul>
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
