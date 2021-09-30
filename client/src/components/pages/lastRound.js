import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import firstImg from '../../assets/first_img.PNG'

const LastRound = (props) => {
  const {oldChar}= props.location.state.newChar

  let newChar={
    name:oldChar.name,
    attack: oldChar.attack,
    HP: oldChar.HP
}
    const [characterHP, setCharacterHP] = useState(oldChar.HP);
    const heal= () =>{
        setCharacterHP(characterHP +25)
        if(oldChar.HP<characterHP){
            setCharacterHP(characterHP=oldChar.HP)
        }

      }

        const chest =() =>{
           newChar.attack= oldChar.attack + 6
            
        }

    return (

      
      <div class="round1">
        <div>
        <div class ="charStats">{characterHP}HP</div>
        <div class= "charStats"> {oldChar.attack}Atk</div>
          <img class="round1Image" src={firstImg} alt="Snow"></img>

          <form action="/action_page.php" class="round1form">
            <h2>The boss awaits at the end of the path...</h2>

            <label>
              <b>Do you sharpen your weapon before the boss? </b>
            </label>
            <button onClick={() => chest()} type="submit" class="round1btns"><Link to='/FinalBattle'>Sharpen</Link>
            </button>

            <label for="psw">
              <b>Or do you tend to your wounds?</b>
            </label>
            <button onClick={() => heal()} type="submit" class="round1btns"> <Link to='/FinalBattle'>Tend</Link>
            </button>
          </form>
        </div>
      </div>
    );
}

export default LastRound;