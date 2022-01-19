import React from 'react'
import "./Header.css"
function Header({scroll}) {
    const [active,setActive] = React.useState("about");
    return (
        <header>
        <div className="header-wrapper">
          <a><img src="/builtree.svg" alt="logo"/></a>
          <nav>
          <ul>
              <li><a href="#" className={active === "about" && "active-link"} onClick={()=>setActive("about")}>About</a></li>
              <li><a href="#" className={active === "projects" && "active-link"} onClick={()=>setActive("projects")}>Projects</a></li>
              <li><a href="#" className={active === "blog" && "active-link"} onClick={()=>setActive("blog")}>Blog</a></li>
              <li><a href="#" className={active === "contact" && "active-link"} onClick={()=>setActive("contact")}>Contact</a></li>
            </ul>
          </nav>

          <div className="social-links">
            <a href="#"><img src="/discord.svg" alt="" /></a>
            <a href="#"><img src="/git.svg" alt="" /></a>
            </div>

            <button className="menu">
              <i className='fa fa-bars'></i>
            </button>
        </div>
      </header>
    )
}

export default Header
