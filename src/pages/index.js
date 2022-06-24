import React from 'react'
import './globalstyles.css'
import Head from '../components/head'
import Layout from '../components/layout'
import BlogList from '../templates/blog-list'

const Index = function () {
    return (
        <Layout>
            <Head title="Blog" />
            <BlogList />
        </Layout>
    )
}

export default Index
