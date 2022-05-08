import React from 'react'
import '../pages/globalstyles.css'
import './blog-list.css'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const BlogList = (props) => {
    // const posts = this.props.data.allMarkdownRemark.edges
    return (
        <Layout>
            {/* <Head title={props.data.markdownRemark.frontmatter.title} /> */}
        </Layout>
    )
}
export default BlogList
