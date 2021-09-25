import React from 'react';
import Form from 'react-bootstrap/Form'
import {useState} from 'react';

export default function CharacterForm (props) {
 return (
<div class="character-form">

<div class="character-questions">Choose a character:</div>

{/* <FloatingLabel controlId="floatingSelect" label="Works with selects"> */}
<Form.Select aria-label="Floating label select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Saved Character Gandalf</option>
  <option value="4">Saved Character Goku</option>

</Form.Select>

<div class="character-questions">Choose a weapon:</div>


<div class="character-questions">Name your character:</div>

  <input></input>
      <button class="character-start-button">Start Game</button>

{/* </FloatingLabel> */}
</div>
 )
   

} 

