import React from "react";

import { Link } from "react-router-dom";
import firstImg from "../../assets/first_img.PNG";

const round1 = props => {
  const {oldChar}= props.location.state.newChar
  return (
    <div class="round1Image" style={{ backgroundImage: `url(${firstImg})` }}>
      <div class="round1">
        <div>
          <img class="round1Image" src={firstImg} alt="Snow"></img>

          <form action="/action_page.php" class="round1form">
            <h2>Shortly after entering the cave, you find a fork in the path...</h2>

            <label>
              <b>To the left, you hear growlings and the stench is fowl. </b>
            </label>
            <button  type="submit" class="round1btns">  <Link to={{pathname:'/Monster1', state:{oldChar}}}>   Go Left</Link>
             
            </button>

            <label for="psw">
              <b>To the right, you see the glimmer of light and warmth.</b>
            </label>
            <button type="submit" class="round1btns">
            <Link to={{pathname='/event1', state:{oldChar}}}>Go Right</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default round1;
