import React from 'react';

import { Link } from 'react-router-dom';
import firstImg from '../../assets/first_img.PNG'


const lastRound = (props) => {

    const heal= () =>{
        setCharacterHP(characterHP +25)
        if(dummyCharacters.HP<characterHP){
            setCharacterHP(characterHP=dummyCharacters.HP)
        }}

        const chest =() =>{
            dummyCharacters.attack+= 6
        }

    return (

      
      <div class="round1">
        <div>
          <img class="round1Image" src={firstImg} alt="Snow"></img>

          <form action="/action_page.php" class="round1form">
            <h2>The boss awaits at the end of the path...</h2>

            <label>
              <b>Do you sharpen your weapon before the boss? </b>
            </label>
            <button onClick={() => chest()} type="submit" class="round1btns">Sharpen 
            </button>

            <label for="psw">
              <b>Or do you tend to your wounds?</b>
            </label>
            <button onClick={() => heal()} type="submit" class="round1btns"> Tend
            </button>
          </form>
        </div>
      </div>
    );
}

export default lastRound;