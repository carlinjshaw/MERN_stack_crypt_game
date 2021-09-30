import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import slimeImg from '../../assets/Slime-.png'
import { Redirect } from 'react-router'
import {  Modal} from 'react-bootstrap';
import backgroundImg from '../../assets/battle-background1.jpg'


const dummyCharacters = {
  name: "dummy",
  attack: 15,
  HP: 15,
};

const Monster = {
  name: "Slime",
  HP: 55,
  smallAttack: 5,
  bigAttack: 12,
};

const MonsterBattle3 = props => {
  const {oldChar}= props.location.state.oldChar
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
    orcAttacks();
  };

  if (characterHP < 1) {
    return <Redirect to="/DeathPage" />;
  } else if (MonsterHP < 1) {
    let newChar ={
      attack: oldChar.attack,
      HP: characterHP + 20,
      name: oldChar.name
  };
    return (
      <Modal size="lg" show>
        <Modal.Title>
          You have defeated the Orc! You acquire the Slimes goopy armor, and
          gain plus 20HP and a staff of magic what could it be used for?
        </Modal.Title>
        <button>
          <Link to={{pathname:"/lastRound",state:{newChar}}}>keep moving forward</Link>{" "}
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
        <div>{MonsterHP}</div>

        <div>The slime is attacking {monsterAttack}</div>
        <div>
          HP {characterHP}/{oldChar.HP}
        </div>

        <button class="attack btn-monster" onClick={() => attack()}>
          Attack
        </button>
        <button class="block btn-monster" onClick={() => block()}>
          Block
        </button>
      </div>
      <img class="monsterimg" src={slimeImg}></img>
    </div>
  );
};

export default MonsterBattle3;
