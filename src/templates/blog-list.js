import React from 'react'
import '../pages/globalstyles.css'
import './blog-list.css'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const { numPages, currentPage } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage =
            currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
        const nextPage = (currentPage + 1).toString()

        return (
            <Layout>
                <ul className="blog-list">
                    {posts.map((post) => {
                        return (
                            <li>
                                <div className="blog-date">
                                    {post.node.frontmatter.date}
                                </div>
                                <div className="blog-title">
                                    {post.node.frontmatter.title}
                                </div>
                                <div className="blog-blurb">
                                    {post.node.excerpt}
                                </div>
                                <Link to={`${post.node.fields.slug}`}>
                                    <div className="read-more">Read More</div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                {!isFirst && (
                    <Link to={`../${prevPage}`} rel="prev">
                        ← Previous Page
                    </Link>
                )}
                {!isLast && (
                    <Link to={`../${nextPage}`} rel="next">
                        Next Page
                    </Link>
                )}
                <ul>
                    {Array.from({ length: numPages }, (_, i) => (
                        <li key={`pagination-number${i + 1}`}>
                            <Link to={`/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
                        </li>
                    ))}
                </ul>
            </Layout>
        )
    }
}

export const blogListQuery = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
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
`
