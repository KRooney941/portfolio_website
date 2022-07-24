import React from "react";
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => (
<>
  <div className="animate-charcter">
    <h1>KIERAN ROONEY</h1>
  </div>
  <div className="sub-heading">
    <p>KIRKINTILLOCH <span class="dot"></span> GLASGOW  <span class="dot"></span> <a href="mailto:krooney941@googlemail.com"> KROONEY941@GOOGLEMAIL.COM </a> </p>
  </div>
  <div className="paragraph">
      <p>I am a driven Junior Software Developer with an academic history in Psychology. Since graduating with a Master's  in Health Psychology I have worked in fast paced, challenging environments where I have had to learn things quickly and work autonomously, as well as in a team to best support service users. 

During COVID I lost my drive to peruse a careen in psychology and tried my hand at coding and fell in love immediately. Coding merged my love of all things tech with my love for creative pursuits.  

I have a passion for learning, in my previous role I found as many opportunities to further my learning outside of work through volunteering and additional courses. I have used this passion in my new role by always trying to improve as a developer, not just at codeclan, but also on sites like Codecademy.</p>
  </div>
  <ul className="list">
        <li>
          <a
            href="https://www.linkedin.com/in/kieran-rooney-7b5147164/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="LinkedIn" icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KRooney941"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="github" icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
</>
);

export default Home;
