import React from 'react';
import { Link } from 'react-router-dom';
import round2Img from '../../assets/round2Left.PNG'

const round2Left = (props) => {
  const oldChar= props.location.state.newChar
  console.log(oldChar)

    return (


<div class="round1">
        <div>
          <img class="round1Image" src={round2Img} alt="Snow"></img>
          <div class ="charStats">{oldChar.HP}HP</div>
        <div class= "charStats"> {oldChar.attack}Atk</div>
          <form action="/action_page.php" class="round1form">
            <h2>Growing weary, but continuing, you find another choice before you. </h2>

            <label>
              <b>To the left, the path is quiet and unalarming.</b>
            </label>
            <button  type="submit" class="round1btns"> <Link to={{pathname:'/LeftBonusRoom',state:{oldChar}}}>Go Left</Link>
             
            </button>

            <label for="psw">
              <b>The right side looks like something sharp was dragged on the ground.</b>
            </label>
            <button type="submit" class="round1btns"> <Link to={{pathname:"/MonsterLeft2", state:{oldChar} }}>Go Right</Link>
            </button>
          </form>
        </div>
      </div>


    )
}

export default round2Left