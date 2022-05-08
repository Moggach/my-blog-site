import React from 'react'
import './globalstyles.css'
import { Link } from 'gatsby'
import Head from '../components/head'
import SideBar from '../components/sidebar'

const NotFound = () => {
    return (
        <div className="container">
            <SideBar />
            <Head title="About" />

            <div className="content">
                <div>
                    <h3>Page not found</h3>
                    <p>
                        <Link to="/">Head home...</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
