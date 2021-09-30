import React, { useState } from "react";
import { Link } from "react-router-dom";
import potionImg from "../../assets/potion.png";
import swordImg from "../../assets/sword.png";
const dummyCharacters = {
  name: "dummy",
  attack: 15,
  HP: 15,
};

const Event1 = (props) => {
  const {oldChar}= props.location.state.oldChar

  const [characterHP, setCharacterHP] = useState(oldChar.HP);

  let newChar={
      name:oldChar.name,
      attack: oldChar.attack,
      HP: oldChar.HP
  }

  const heal = () => {
    setCharacterHP(characterHP + 10);
    if (oldChar.HP < characterHP) {
      setCharacterHP((characterHP = oldChar.HP));
    }
    newChar.HP= characterHP
  };
  const chest = () => {
    newChar.attack = oldChar.attack + 4;

  };

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
        <button class="choose" onClick={() => heal()}>
          <Link to={{pathname:"/round4", state:{newChar}}}>Choose potion</Link>
        </button>
      </div>
      <div>
        <p>Use this weapon to coninue your conquest and gain plus 4 attack.</p>
        <img class="bonusImgsLeftRoom items" src={swordImg}></img>
        <button class="choose" onClick={() => chest()}>
          <Link to={{pathname:"/round4", state:{newChar}}}>Choose Sword</Link>
        </button>
      </div>
      <p>
        <div>Your HP is currentl {characterHP}</div>
        <div>Your attack is currently {oldChar.attack}</div>
      </p>
    </div>
  );
};

export default Event1;
