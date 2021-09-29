import React, {useState} from 'react';
import { Link } from 'react-router-dom';
 import potionImg from '../../assets/potion.png'
import swordImg from '../../assets/sword.png'
const dummyCharacters = {
    name: "dummy",
    attack: 15,
    HP: 15,
  };

const Event1 = ()=>{
    const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);
    
    const heal= () =>{
        setCharacterHP(characterHP +10)
        if(dummyCharacters.HP<characterHP){
            setCharacterHP(characterHP=dummyCharacters.HP)
        }
       
    }
    const chest =() =>{
        dummyCharacters.attack+= 4

    }



    return(
        <div>
        <div>You discover much needed items! They are too much to carry both, so you can only take one:</div>
        <div>
            Take a much needed potion for plus 10 health
        <img class="bonusImgsLeftRoom" src={potionImg}></img>
        <button onClick={() => heal()}><Link to='/round4'>Choose potion</Link></button>
        </div>
        <div>
            Use this weapon to coninue your conquest and gain plus 4 attack. 
        <img class="bonusImgsLeftRoom" src={swordImg}></img>
        <button onClick={() => chest()}><Link to='/round4'>Choose Sword</Link></button>
        </div>

        <div>Your HP is currentl {characterHP}</div>
        <div>Your attack is currently {dummyCharacters.attack}</div>
    </div>
)
}

export default Event1
