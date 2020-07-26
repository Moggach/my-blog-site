import React from "react"
import "../components/bloglist.css"
import avatar from "../images/avatar.jpg"
import github from "../images/github-brands.svg"
import twitter from "../images/twitter-brands.svg"
import linkedin from "../images/linkedin-brands.svg"
import { Link } from "gatsby"

const NotFound = () => {
   return (

    <div className="container">
    <div className="sidebar">
    
    <img className="avatar" src={avatar}/>
      <div className="about">
        <p className="title">Anna Cunnane</p>
        <p>Pellentesque odio nisi, euismod in, pharetra a
          ultricies in, diam. Sed arcu. </p>
      </div>


<ul>
 <li><Link to="/">Articles</Link></li>
 <li><Link to="/about">About Me</Link></li>
</ul>

      <a href="https://twitter.com/MollyBloom1989" target="_blank">
        <img className="social-icons" src={twitter} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/annacunnane/" target="_blank">
        <img className="social-icons" src={linkedin} alt="" />
      </a>
      <a href="https://github.com/Moggach" target="_blank">
        <img className="social-icons" src={github} alt="" />
      </a>
      <div className="copyright">@ All Rights Reserved</div>
      </div>

      <div>

     <div>Page not found</div>
     <Link to="/">Head home...</Link>
</div>

</div>

   )

}
 

  


export default NotFound
