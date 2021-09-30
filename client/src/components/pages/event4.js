import React, { useState } from "react";
import { Link } from "react-router-dom";
import fruitImg from "../../assets/Fruits.png";
import chestImg from "../../assets/chestplate.png";
const dummyCharacters = {
  name: "dummy",
  attack: 15,
  HP: 15,
};

const Event4 = (props) => {
  const oldChar= props.location.state.oldChar
console.log(oldChar)
  const [characterHP, setCharacterHP] = useState(oldChar.HP);

  let newChar={
    name:oldChar.name,
    attack: oldChar.attack,
    HP: oldChar.HP
}
  const heal = () => {
    newChar.HP= oldChar.HP +22

  };
  const chest = () => {
    newChar.HP= oldChar.HP + 16;
    
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
        <Link to={{pathname:"/lastRound", state:{newChar}}}>Choose fruit</Link>
        </button>
      </div>
      <div>
        <p> Use armor to coninue your conquest and gain plus 16 max HP. </p>
        <img class="bonusImgsLeftRoom items" src={chestImg}></img>
        <button class="choose" onClick={() => chest()}>
        <Link to={{pathname:"/lastRound", state:{newChar}}}>Choose Armor</Link>
        </button>
      </div>
      <p>
        <div>Your HP is currentl {characterHP}</div>
        <div>Your attack is currently {oldChar.attack}</div>
      </p>
    </div>
  );
};

export default Event4;
