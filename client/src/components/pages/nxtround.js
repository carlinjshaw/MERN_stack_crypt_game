import React from 'react';
import { Link } from 'react-router-dom';
// import round4Img from '../../assets/nxtRoundImg.PNG'
import round4Img from '../../assets/cave4Img.PNG'

const round4 = (props) => {
  const oldChar= props.location.state.newChar
  console.log(oldChar)
    return (

      
      <div class="round1">
        <div>
          <img class="round1Image" src={round4Img} alt="Snow"></img>
          <div class ="charStats">{oldChar.HP}HP</div>
        <div class= "charStats"> {oldChar.attack}Atk</div>
          <form action="/action_page.php" class="round1form form">
            <h2>You keep heading deeper into the crypt and find another fork in the path...</h2>

            <label>
              <b>To the left you hear menacing squishing sounds. What could it be?. </b>
            </label>
            <button  type="submit" class="round1btns">  <Link to={{pathname:'/Monster3', state:{oldChar}}}>   Go Left</Link>
             
            </button>

            <label for="psw">
              <b>To the right, you see an supposedly an armory. What could it hold?</b>
            </label>
            <button type="submit" class="round1btns">
            <Link to={{pathname:'/event4',state:{oldChar}}}>   Go Right</Link>
            </button>
          </form>
        </div>
      </div>
    );
}

export default round4;