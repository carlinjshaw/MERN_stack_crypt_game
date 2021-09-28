import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import fruitImg from '../../assets/Fruits.png'
import chestImg from '../../assets/chestplate.png'
const dummyCharacters = {
    name: "dummy",
    attack: 15,
    HP: 15,
  };

const Event4 = ()=>{
    const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);

    const heal= () =>{
        setCharacterHP(characterHP +22)
        if(dummyCharacters.HP<characterHP){
            setCharacterHP(characterHP=dummyCharacters.HP)
        }
       
    }
    const chest =() =>{
        dummyCharacters.HP+= 16
        
    }




    return(
        <div>
        <div>You discover much needed items! They are too much to carry both, so you can only take one:</div>
        <div>
            Take a much needed potion for plus 22 health
        <img class="bonusImgsLeftRoom" src={fruitImg}></img>
        <button onClick={() => heal()}><Link to='/lastRound'>Choose fruit</Link></button>
        </div>
        <div>
            Use armor to coninue your conquest and gain plus 16 max HP. 
        <img class="bonusImgsLeftRoom" src={chestImg}></img>
        <button onClick={() => chest()}><Link to='/lastRound'>Choose Armor</Link></button>
        </div>

        <div>Your HP is currentl {characterHP}</div>
        <div>Your attack is currently {dummyCharacters.attack}</div>
    </div>
)
}

export default Event4