import React, { useState } from "react";
import { Link } from "react-router-dom";
import fruitImg from "../../assets/Fruits.png";
import chestImg from "../../assets/chestplate.png";
const dummyCharacters = {
  name: "dummy",
  attack: 15,
  HP: 15,
};

const Event4 = () => {
  const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);

  const heal = () => {
    setCharacterHP(characterHP + 22);
    if (dummyCharacters.HP < characterHP) {
      setCharacterHP((characterHP = dummyCharacters.HP));
    }
  };
  const chest = () => {
    dummyCharacters.HP += 16;
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
        <p> Take a much needed potion for plus 22 health</p>
        <img class="bonusImgsLeftRoom items" src={fruitImg}></img>
        <button class="choose" onClick={() => heal()}>
          <Link to="/lastRound">Choose fruit</Link>
        </button>
      </div>
      <div>
        <p> Use armor to coninue your conquest and gain plus 16 max HP. </p>
        <img class="bonusImgsLeftRoom items" src={chestImg}></img>
        <button class="choose" onClick={() => chest()}>
          <Link to="/lastRound">Choose Armor</Link>
        </button>
      </div>
      <p>
        <div>Your HP is currentl {characterHP}</div>
        <div>Your attack is currently {dummyCharacters.attack}</div>
      </p>
    </div>
  );
};

export default Event4;
