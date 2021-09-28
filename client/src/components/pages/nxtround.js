import React from 'react';

import { Link } from 'react-router-dom';
import firstImg from '../../assets/first_img.PNG'


const round4 = (props) => {
    return (

      
      <div class="round1">
        <div>
          <img class="round1Image" src={firstImg} alt="Snow"></img>

          <form action="/action_page.php" class="round1form">
            <h2>Further you walk, and find a fork in the path...</h2>

            <label>
              <b>To the left, you hear growlings and the stench is fowl. </b>
            </label>
            <button  type="submit" class="round1btns">  <Link to='/Monster3'>   Go Left</Link>
             
            </button>

            <label for="psw">
              <b>To the right, you see the glimmer of light and warmth.</b>
            </label>
            <button type="submit" class="round1btns">
            <Link to='/event4'>   Go Right</Link>
            </button>
          </form>
        </div>
      </div>
    );
}

export default round4;