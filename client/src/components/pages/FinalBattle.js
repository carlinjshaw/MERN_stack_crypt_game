import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import balrogImg from '../../assets/balrog.PNG'
import { Redirect } from 'react-router'
import { Modal} from 'react-bootstrap';



const dummyCharacters = {
    name: "dummy",
    attack: 15,
    HP: 15,
  };
  
  const Monster = {
    name: "balrog",
    HP: 300,
    smallAttack: 6,
    bigAttack: 200,
  };
  
  
  
  
  const FinalBattle = (props) => {
    const win=()=>{
      setMonsterHP(0)
    }
  
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
              <Modal.Title>You have defeated the mighty Balrog!
                  
              </Modal.Title>
              <button><Link to='/WinnerPage'>Continue</Link>  </button>
              
          </Modal>
      )
  }
  
    return (
      <div>
        <div class="info">
          <div>{MonsterHP}</div>

          <div>Balrog is attacking {monsterAttack}</div>
          <div>
            HP {characterHP}/{dummyCharacters.HP}
          </div>

          <button class="btn-monster attack" onClick={() => attack()}>
            Attack
          </button>
          <button class="btn-monster block" onClick={() => block()}>
            Block
          </button>
          <button class="btn-monster useStaff" onClick={() => win()}>Use Staff </button>
        </div>
        <img class="finalMonsterImg" src={balrogImg}></img>
      </div>
    );
  };



export default FinalBattle;