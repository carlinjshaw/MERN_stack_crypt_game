import React from 'react';
import {useState} from 'react';
import { FormSelect } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { ADD_CHARACTER } from '../utils/mutations.js'
import { useMutation } from '@apollo/client'


const classes = {
  wizard: {
    HP: 8,
    attack: 15
  },
  brute: {
    HP: 18,
    attack: 5
  },

  pokemon: {
    HP: 10,
    attack: 9
  },

  knight: {
    HP: 10,
    attack: 13
  },

  elf: {
    HP: 9,
    attack:14
  }
}

const weapons = {
 sword:{attack:10},
   bow:{attack:8},
 axe:{attack:7}
}



const CharacterForm = (props) => {

  // const [CharStats, setCharStats] = useState({name:'',HP:0,attack:0})

  const [addCharacter, {error}] = useMutation(ADD_CHARACTER)

  const [charClass, setCharClass] = useState({})
  const [charWeapon, setCharWeapon] = useState({})
  const [charName, setCharName] = useState("")

const inputHandler = (event) => {
   const {value} = event.target

   if(event.target.id == "characterClass") {
     // change the class state
     setCharClass(classes[value])
   } else if(event.target.id == "characterWeapon") {
    // change the weapon state
    setCharWeapon(weapons[value])
  } else {
    // change the name state
    setCharName(value)
  }
  //  setCharName(value)
}


const saveCharacter = async () => {

  console.log(charClass)
  console.log(charWeapon)
  console.log(charName)
  

  let newCharacter = {
    name: charName,
    attack: charClass.attack + charWeapon.attack,
    HP: charClass.HP
  }


  try {
    const {data} = await addCharacter({
      variables: { ...newCharacter }
    })
    console.log(data)


  } catch(error){
    console.error(error)
  }
  return(
    <Redirect to={{pathname:"/round1",state:{newCharacter}}}/>
)
}

return (
<div class="character-form">

<div class="character-questions">Choose a character:</div>

{/* <FloatingLabel controlId="floatingSelect" label="Works with selects" */}

<FormSelect  onChange={inputHandler} id="characterClass" aria-label="Floating label select example">
  <option>Open this select menu</option>
  <option value="elf">Elf</option>
  <option value="knight">Knight</option>
  <option value="pokemon">Pokemon</option>
  <option value="brute">Brute</option>
  <option value="wizard">Wizard</option>
</FormSelect>


<div class="character-questions">Choose a weapon:</div>

<FormSelect  onChange={inputHandler} aria-label="Floating label select example" id="characterWeapon">
  <option>Open this select menu</option>
  <option value="bow">Bow</option>
  <option value="sword">Sword</option>
  <option value="axe">Axe</option>
</FormSelect>

<div class="character-questions" >Name your character:</div>

  <input class="name" onChange={inputHandler} id="characterName" value={charName}></input>
      <button onClick={saveCharacter} class="character-start-button">  Start Game</button>
{/* </FloatingLabel> */}
</div>
 )
} 

export default  CharacterForm;
