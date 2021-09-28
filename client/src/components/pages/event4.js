import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router'

const dummyCharacters = {
    name: "dummy",
    attack: 15,
    HP: 8,
  };

const event4 = ()=>{
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
 <div>
        HP {characterHP}/{dummyCharacters.HP}
      </div>
      <Modal 
        size='lg'
        show
        >
            <Modal.Title>You find a chest with a slight glimmer and a cart of potions. 
                Which do you choose to take?
            </Modal.Title>
            <button onClick={() => heal()} >Potions</button>
            <button onClick={() => chest()} >Open chest</button>
        </Modal>
        </div>
    )
}

export default event4