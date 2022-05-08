import React from 'react'
import '../pages/globalstyles.css'
import '../templates/blog-post.css'
import gatsbyLogo from '../images/gatsbyjs-icon.svg'
import { Link } from 'gatsby'
import Head from '../components/head'
import SideBar from '../components/sidebar'

const AboutPage = () => {
    return (
        <div className="container">
            <Head title="About" />

            <SideBar />
            <div className="content">
                <h3>Hello and thank you for visiting my blog</h3>
                <p>
                    I used to work in book publishing and I recently retrained
                    to become a software developer.
                </p>

                <p>
                    For the past two years I have been learning web development
                    and I built this site using{' '}
                    <Link to="https://www.gatsbyjs.com/">
                        Gatsby{' '}
                        <img src={gatsbyLogo} style={{ width: '20px' }} />
                    </Link>
                </p>
                <p>
                    I was part of the FAC22 cohort at{' '}
                    <Link to="https://www.foundersandcoders.com/"></Link>
                    Founders and Coders and I now work as an Apprentice Software
                    Developer at{' '}
                    <Link to="https://commonknowledge.coop/"></Link>Common
                    Knowledge.
                    <p>
                        I am passionate about the rights of women and girls and
                        I am also an advisor on the National Domestic Abuse
                        Helpline.
                    </p>
                    Want to get in touch with me? Please use the form below and
                    I will get back to you as soon as I can.
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        action="/thank-you"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="field half first">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="field half">
                            <label htmlFor="email"></label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="message"></label>
                            <textarea
                                name="message"
                                id="message"
                                rows="6"
                                placeholder="Message"
                            />
                        </div>
                        <ul className="actions">
                            <li>
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="special"
                                />
                            </li>
                            <li>
                                <input
                                    type="reset"
                                    value="Clear"
                                    className="special"
                                />
                            </li>
                        </ul>
                    </form>
                </p>
            </div>
        </div>
    )
}

export default AboutPage
