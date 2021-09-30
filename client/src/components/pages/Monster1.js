import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import orcImg from '../../assets/orc_monster.png'
import { Redirect } from 'react-router'
import {  Modal } from 'react-bootstrap';
import backgroundImg from '../../assets/battle-background1.jpg'

const dummyCharacters = {
  name: "dummy",
  attack: 15,
  HP: 15,
};

const Monster = {
  name: "orc",
  HP: 31,
  smallAttack: 2,
  bigAttack: 10,
};

const MonsterBattle = (props) => {
  const oldChar= props.location.state.oldChar
  console.log(oldChar)

  const [monsterAttack, setmonsterAttack] = useState(0);
  const [characterHP, setCharacterHP] = useState(oldChar.HP);

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
  const attack = event => {
    // event.preventDefault()
    console.log("attacks");
    setMonsterHP(MonsterHP - oldChar.attack);
    orcAttacks();

    setCharacterHP(characterHP - monsterAttack);
  };
  
  //player blocks monster's attack
  const block = event => {
    console.log("blocks");
    setCharacterHP(characterHP - 1);
    orcAttacks();
  };
  
  if (characterHP < 1) {
    return <Redirect to="/DeathPage" />;
  } else if (MonsterHP < 1) {
      let newChar ={
        attack: oldChar.attack += 10,
        HP: characterHP,
        name: oldChar.name
    };
    return (
      <Modal size="lg" show>
        <Modal.Title>
          You have defeated the Orc! You acquire the Orc's fearsome battle axes,
          and gain plus 10 in your attack!
        </Modal.Title>

        <button>
          <Link to={{pathname:"/Round2Left", state:{newChar} }}>Keep Exploring</Link>{" "}
        </button>
      </Modal>
    );
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
        <div class="fightText">The orc is attacking {monsterAttack}</div>

        <button class="btn-monster attack fightText" onClick={() => attack()}>
          Attack
        </button>
        <button class="btn-monster block fightText" onClick={() => block()}>
          Block
        </button>
        <div>
          HP {characterHP}/{oldChar.HP}
        </div>
      </div>
      <img class="monsterimg" src={orcImg}></img>
    </div>
  );
};

export default MonsterBattle;
