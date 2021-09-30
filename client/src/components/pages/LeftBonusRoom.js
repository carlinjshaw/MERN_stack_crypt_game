import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Character } from "../../../../server/models";
import potionImg from "../../assets/potion.png";
import swordImg from "../../assets/sword.png";

const dummyCharacters = {
  name: "dummy",
  attack: 15,
  HP: 15,
};

const BonusPage = props => {
  const {oldChar}= props.location.state.oldChar

  const [characterHP, setCharacterHP] = useState(oldChar.HP);
  const [characterAttack, setCharacterAttack] = useState(
    oldChar.attack,
  );
  let newChar={
    name:oldChar.name,
    attack: oldChar.attack,
    HP: oldChar.HP
}
  const potion = event => {
    event.preventDefault();
    setCharacterHP(characterHP +10)
    if(oldChar.HP<characterHP){
        setCharacterHP(characterHP=oldChar.HP)
    }
    newChar.HP= characterHP
  }
  //this is NOT the best way, but only way I could get the modal to return

  const sword = () => {
    setCharacterAttack(characterAttack + 5);
    newChar.attack= characterAttack
  };
  //this is NOT the best way, but only way I could get the modal to return
  //might need to be changed depending on how we import character data

  return (
    <div>
      <div>
        <p>
          You discover much needed items! They are too much to carry both, so
          you can only take one:
        </p>
      </div>
      <div>
        <p> Take a much needed potion for plus 10 health</p>
        <img class="bonusImgsLeftRoom items" src={potionImg}></img>
        <button class="choose" onClick={() => potion()}>
          <Link to={{pathname:"/lastRound", state:{newChar}}}>Choose potion</Link>
        </button>
      </div>
      <div>
        <p>
          {" "}
          Use this weapon to coninue your conquest and gain plus 5 attack.{" "}
        </p>
        <img class="bonusImgsLeftRoom items" src={swordImg}></img>
        <button class="choose" onClick={() => sword()}>
          <Link to={{pathname:"/lastRound",state:{newChar}}}>Choose Sword</Link>
        </button>
      </div>
      <p>
        <div>Your HP is currentl {characterHP}</div>
        <div>Your attack is currently {characterAttack}</div>
      </p>
    </div>
  );
};

export default BonusPage;
