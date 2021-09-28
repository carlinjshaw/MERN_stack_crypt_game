import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import slimeImg from '../../assets/Slime-.png'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router'
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';


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




const MonsterBattle3 = (props) => {
  const [monsterAttack, setmonsterAttack] = useState(0);
  const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);

  const orcAttacks = () => {
    var number = Math.floor(Math.random() * 2);
    console.log(number);
    if (number === 1) {
      setmonsterAttack(Monster.bigAttack);
    } else {
      setmonsterAttack(Monster.smallAttack);
    }
  };

  const roomEnd =()=>{
    dummyCharacters.HP+= 20
    dummyCharacters.HP = characterHP
  };

  const [MonsterHP, setMonsterHP] = useState(Monster.HP);
  const attack = (event) => {
    // event.preventDefault()
    console.log("attacks");
    setMonsterHP(MonsterHP - dummyCharacters.attack);
    orcAttacks();

    setCharacterHP(characterHP - monsterAttack);
  };

//player blocks monster's attack
  const block = (event) => {
      console.log('blocks')
      orcAttacks()
  }

if (characterHP < 1) {
    return <Redirect to='/'/>
} else if (MonsterHP < 1) {


    return (
        <Modal 
        size='lg'
        show
        >

            <Modal.Title>You have defeated the Orc!
                You acquire the Slimes goopy armor, and gain plus 20HP and a staff of magic what could it be used for?
            </Modal.Title>
            <button onClick={() => roomEnd()} ><Link to='/lastRound'>keep moving forward</Link>  </button>
            
        </Modal>
    )
}

  return (
    <div>
      <div>{MonsterHP}</div>

      <div>The slime is attacking {monsterAttack}</div>
      <div>
        HP {characterHP}/{dummyCharacters.HP}
      </div>

      <button onClick={() => attack()}>Attack</button>
      <button onClick={()=> block()}>Block</button>
      <img src={slimeImg}></img>
    </div>
  );
};

export default MonsterBattle3