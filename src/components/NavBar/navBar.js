import React from "react";
import { Link } from "react-router-dom";
import './navBar.css'
import headshot from '../../images/headshot.png' 


const NavBar = () => {

  return (
  <div className="nav-bar">
    <img
              src={headshot}
              alt="headshot"
            />

          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/experience">EXPERIENCE</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/interests">INTERESTS</Link>
            </li>
          </ul>
  </div>
  );
}

export default NavBar;
