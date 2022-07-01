import React from "react";
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Home = () => (
<>
  <div className="home">
    <h1>KIERAN ROONEY</h1>
  </div>
  <div className="sub-heading">
    <p>KIRKINTILLOCH <span class="dot"></span> GLASGOW  <span class="dot"></span> <a href="mailto:krooney941@googlemail.com"> KROONEY941@GOOGLEMAIL.COM </a> </p>
  </div>
  <div className="paragraph">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <ul className="list">
        <li>
          <a
            href="https://www.linkedin.com/in/kieran-rooney-7b5147164/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KRooney941"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
</>
);

export default Home;
