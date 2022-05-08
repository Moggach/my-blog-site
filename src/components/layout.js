import React from 'react'
import SideBar from './sidebar'

export default function Layout({ children }) {
    return (
        <div className="container">
            <SideBar />
            {children}
        </div>
    )
}
