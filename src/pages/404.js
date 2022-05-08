import React from 'react'
import './globalstyles.css'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Page Not found" />
            <div className="content">
                <div>
                    <h3>Page not found</h3>
                    <p>
                        <Link to="/">Head home...</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound
