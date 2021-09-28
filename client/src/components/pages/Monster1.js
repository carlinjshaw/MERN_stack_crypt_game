import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import orcImg from '../../assets/orc_monster.png'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router'
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';


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
    dummyCharacters.attack+= 10
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
      setCharacterHP(characterHP - 1)
      orcAttacks()
  }

if (characterHP < 1) {
    return <Redirect to='/'/>
} else if (MonsterHP < 1) {
    return (
        <Modal 
        size='lg'
        show>
            <Modal.Title>You have defeated the Orc!
                You acquire the Orc's fearsome battle axes, and gain plus 10 in your attack!
            </Modal.Title>

            <button onClick={() => roomEnd()} ><Link to='/Round2Left'>Keep Exploring</Link>  </button>
            
        </Modal>
    )
}

  return (
    <div>
      <div>{MonsterHP}</div>

      <div>The orc is attacking {monsterAttack}</div>
      <div>
        HP {characterHP}/{dummyCharacters.HP}
      </div>

      <button onClick={() => attack()}>Attack</button>
      <button onClick={()=> block()}>Block</button>
      <img src={orcImg}></img>
    </div>
  );
};

export default MonsterBattle