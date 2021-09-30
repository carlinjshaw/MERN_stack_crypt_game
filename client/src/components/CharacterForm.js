import React from 'react';
import {useState} from 'react';
import { FormSelect } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ADD_CHARACTER } from '../utils/mutations.js'
import { useMutation } from '@apollo/client'



const wizard = {
  HP: 8,
  attack: 15
}
const brute = {
  HP: 18,
  attack: 5
}

const pokemon = {
  HP: 10,
  attack: 9
}

const knight = {
  HP: 10,
  attack: 13
}

const elf = {
  HP: 9,
  attack:14
}

const sword={attack:10}
const bow={attack:8}
const axe={attack:7}

const CharacterForm = (props) => {

  // const [CharStats, setCharStats] = useState({name:'',HP:0,attack:0})

  const [addCharacter, {error}] = useMutation(ADD_CHARACTER)

const inputHandler = (event) => {
   const {value} = event.target
  //  setCharName(value)
}


const saveCharacter = async () => {
  let newCharacter = {

  }


  try {
    const {data} = await addCharacter({
      variables: { ...newCharacter }
    })
    console.log(data)
  } catch(error){
    console.error(error)
  }
}

return (
<div class="character-form">

<div class="character-questions">Choose a character:</div>

{/* <FloatingLabel controlId="floatingSelect" label="Works with selects" */}

<FormSelect  onChange={inputHandler} aria-label="Floating label select example">
  <option>Open this select menu</option>
  <option value={elf}>Elf</option>
  <option value={knight}>Knight</option>
  <option value={pokemon}>Pokemon</option>
  <option value={brute}>Brute</option>
  <option value={wizard}>Wizard</option>
</FormSelect>


<div class="character-questions">Choose a weapon:</div>

<FormSelect aria-label="Floating label select example">
  <option>Open this select menu</option>
  <option value={bow}>Bow</option>
  <option value={sword}>Sword</option>
  <option value={axe}>Axe</option>
</FormSelect>

<div class="character-questions">Name your character:</div>

  <input class="name" onChange={inputHandler}></input>
      <button onClick={saveCharacter} class="character-start-button"> <Link to='/Round1'>  Start Game</Link></button>
{/* </FloatingLabel> */}
</div>
 )
} 

export default  CharacterForm;
