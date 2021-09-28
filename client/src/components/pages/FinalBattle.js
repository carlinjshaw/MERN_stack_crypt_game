import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import balrogImg from '../../assets/balrog.PNG'

import minotaurImg from '../../assets/round2LeftBattle.png'

import ReactDOM from 'react-dom'
import { Redirect } from 'react-router'
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import round2Left from './Round2Left';


const dummyCharacters = {
    name: "dummy",
    attack: 15,
    HP: 8,
  };
  
  const Monster = {
    name: "orc",
    HP: 31,
    smallAttack: 2,
    bigAttack: 10,
  };
  
  
  
  
  const FinalBattle = (props) => {
  
    const [monsterAttack, setmonsterAttack] = useState(0);
    const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);
    const [MonsterHP, setMonsterHP] = useState(Monster.HP);
  
    const orcAttacks = () => {
      var number = Math.floor(Math.random() * 2);
      console.log(number);
      if (number === 1) {
        setmonsterAttack(Monster.bigAttack);
      } else {
        setmonsterAttack(Monster.smallAttack);
      }
    };
  
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
              <Modal.Title>You have defeated the Balrog!
                  You acquire the Orc's fearsome battle axes, and gain plus 10 in your attack!
              </Modal.Title>
              <button><Link to='/WinnerPage'>Keep Exploring</Link>  </button>
              
          </Modal>
      )
  }
  
    return (
      <div>
        <div>{MonsterHP}</div>
  
        <div>Balrog is attacking {monsterAttack}</div>
        <div>
          HP {characterHP}/{dummyCharacters.HP}
        </div>
  
        <button onClick={() => attack()}>Attack</button>
        <button onClick={()=> block()}>Block</button>
        <img src={balrogImg}></img>
      </div>
    );
  };



export default FinalBattle;