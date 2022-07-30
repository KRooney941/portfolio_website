import React from "react";
import './interests.css'
import budgies from '../../images/budgies.png' 

const Interests = () => (
  <div className="interests">
    <h4>Interests</h4>
    <p>Other than programming, I am a proud budgie dad to Frank and Ted. I've attached a picture for your viewing pleasure. I am also a budding guitarist at the <a className="GFW" href="https://gfw.scot/">Glasgow Folk Workshop</a> and lover of folk music (in the top 0.5% of Corries listeners on Spotify last year). My other hobbies include learning Gaelic, I recently lost out on a 100 day streak on Duolingo by one day because I went on holiday. Tha mi cho brònach! </p>
    <img className="budgies"
              src={budgies}
              alt="budgies"
            />
  </div>
)

export default Interests;