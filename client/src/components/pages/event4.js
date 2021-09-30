import React, { useState } from "react";
import { Link } from "react-router-dom";
import fruitImg from "../../assets/Fruits.png";
import chestImg from "../../assets/chestplate.png";

const Event4 = (props) => {
  const {oldChar}= props.location.state.oldChar

  const [characterHP, setCharacterHP] = useState(oldChar.HP);

  let newChar={
    name:oldChar.name,
    attack: oldChar.attack,
    HP: oldChar.HP
}
  const heal = () => {
    setCharacterHP(characterHP + 22);
    if (oldChar.HP < characterHP) {
      setCharacterHP((characterHP = oldChar.HP));
    }
    newChar.HP= characterHP

  };
  const chest = () => {
    newChar.attack = oldChar.attack + 16;
    
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
      <div class ="charStats">{characterHP}HP</div>
        <div class= "charStats"> {oldChar.attack}Atk</div>
      </p>
    </div>
  );
};

export default Event4;
