import React from 'react';

import { Link } from 'react-router-dom';
import caveImg from '../../assets/cave.PNG'

const round4 = (props) => {
    return (

      
      <div class="round1">
        <div>
          <img class="round1Image" src={caveImg} alt="Snow"></img>

          <form class="form" action="/action_page.php" class="round1form">
            <h2>You keep heading deeper into the crypt and find another fork in the path...</h2>

            <label>
              <b>To the left you hear menacing squishing sounds. What could it be?. </b>
            </label>
            <button  type="submit" class="round1btns">  <Link to='/Monster3'>   Go Left</Link>
             
            </button>

            <label for="psw">
              <b>To the right, you see an supposedly an armory. What could it hold?</b>
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