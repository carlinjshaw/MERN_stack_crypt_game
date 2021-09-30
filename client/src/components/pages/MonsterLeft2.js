import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import minotaurImg from '../../assets/round2LeftBattle.png'
import { Redirect } from 'react-router'
import {  Modal } from 'react-bootstrap';
import backgroundImg from '../../assets/battle-background1.jpg'

  
  const Monster = {
    name: "orc",
    HP: 50,
    smallAttack: 3,
    bigAttack: 15,
  };



const MonsterBattle = (props) => {
  const oldChar= props.location.state.oldChar
  console.log(oldChar)

//set up use states
    const [monsterAttack, setmonsterAttack] = useState(0);
    const [characterHP, setCharacterHP] = useState(oldChar.HP);
    
//enemy attacks
const orcAttacks = () => {
  var number = Math.floor(Math.random() * 2);
  console.log(number);
  if (number === 1) {
    setmonsterAttack(Monster.bigAttack);
  } else {
    setmonsterAttack(Monster.smallAttack);
  }
};

const [MonsterHP, setMonsterHP] = useState(Monster.HP);
const attack = (event) => {
  // event.preventDefault()
  console.log("attacks");
  setMonsterHP(MonsterHP - oldChar.attack);
  orcAttacks();

  setCharacterHP(characterHP - monsterAttack);
};

//player blocks monster's attack
const block = (event) => {
    console.log('blocks')
    setCharacterHP(characterHP - 1)
    orcAttacks()
}

//if monster is defeated
if (characterHP < 1) {
    return <Redirect to='/DeathPage'/>
} else if (MonsterHP < 1) {
  let newChar ={
    attack: oldChar.attack += 10,
    HP: characterHP,
    name: oldChar.name
};
    return (
        <Modal 
        size='lg'
        show
        >

            <Modal.Title>You have defeated the minotaur!
                You acquire the minotaur's great scithe and a mysterious scepter gain plus 15 in your attack!
            </Modal.Title>
            <button><Link to={{pathname:'/lastRound', state:{newChar}}}>Keep Exploring</Link>  </button>
            
        </Modal>
    )
}

    return (
      <div
    style= {{
      backgroundImage: 'url('+backgroundImg+')',
      backgroundSize: "cover",
      height: "100vh",
    }}
    >
        <div class="info">
        <div>{MonsterHP}/{Monster.HP}HP</div>
          <div>The minotaur is attacking {monsterAttack}</div>
        <div class ="charStats">{characterHP}HP</div>
        <div class= "charStats"> {oldChar.attack}Atk</div>

          <button class="btn-monster attack" onClick={() => attack()}>
            Attack
          </button>
          <button class="btn-monster block" onClick={() => block()}>
            Block
          </button>
        </div>
        <img class="minotaurImg" src={minotaurImg}></img>
      </div>
    );
}

export default MonsterBattle;