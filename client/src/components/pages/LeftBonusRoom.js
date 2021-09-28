import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import potionImg from '../../assets/potion.png'
import swordImg from '../../assets/sword.png'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router'
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const dummyCharacters = {
    name: "dummy",
    attack: 15,
    HP: 8,
  };

const BonusPage = (props) => {

    const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);
    const [characterAttack, setCharacterAttack] = useState(dummyCharacters.attack)

    const potion = (event) => {
      event.preventDefault()
      setCharacterHP(characterHP + 10);
    };
    if (potion()) {
    return (
      <Modal 
      size="lg" 
      show>
        <Modal.Title>
          Hopefully your choice will grant you more success in this journey.
        </Modal.Title>
        <button>
          <Link to="/FinalBattle">Keep Exploring</Link>
        </button>
      </Modal>
    );
    }
//this is NOT the best way, but only way I could get the modal to return
// if (characterHP > 10) {
//   return (
//     <Modal 
//     size="lg" 
//     show>
//       <Modal.Title>
//         Hopefully your choice will grant you more success in this journey.
//       </Modal.Title>
//       <button>
//         <Link to="/FinalBattle">Keep Exploring</Link>
//       </button>
//     </Modal>
//   );
// }


    const sword = () => {
        setCharacterAttack(characterAttack + 5)
    }
//this is NOT the best way, but only way I could get the modal to return
//might need to be changed depending on how we import character data
if (characterAttack > 15) {
    return (
        <Modal size="lg" show>
          <Modal.Title>
            Hopefully your choice will grant you more success in this journey.
          </Modal.Title>
          <button><Link to="/FinalBattle">Keep Exploring</Link></button>
        </Modal>
      );
    }

    return (
        <div>
            <div>You discover much needed items! They are too much to carry both, so you can only take one:</div>
            <div>
                Take a much needed potion for plus 10 health
            <img class="bonusImgsLeftRoom" src={potionImg}></img>
            <button onClick={() => potion()}>Choose Potion</button>
            </div>
            <div>
                Use this weapon to coninue your conquest and gain plus 5 attack. 
            <img class="bonusImgsLeftRoom" src={swordImg}></img>
            <button onClick={() => sword()}>Choose Sword</button>
            </div>

            <div>Your HP is currentl {characterHP}</div>
            <div>Your attack is currently {characterAttack}</div>
        </div>
    )
}

export default BonusPage;