import React from 'react'
import './globalstyles.css'
import './about.css'
import Head from '../components/head'
import SideBar from '../components/sidebar'

const ThankYouPage = function () {
    return (
        <div className="container">
            <Head title="About" />
            <SideBar />
            <div className="content">
                <p>Thank you for your submission!</p>
            </div>
        </div>
    )
}

export default ThankYouPage
