import React from 'react'
import './globalstyles.css'
import './about.css'
import Head from '../components/head'
import Layout from '../components/layout'

const ThankYouPage = function () {
    return (
        <Layout>
            <Head title="Thank you" />

            <div className="content">
                <p>Thank you for your submission!</p>
            </div>
        </Layout>
    )
}

export default ThankYouPage
