import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Redirect } from "react-router";
import { Modal } from "react-bootstrap";

const dummyCharacters = {
  name: "dummy",
  attack: 15,
  HP: 8,
};

const Event1 = () => {
  const [characterHP, setCharacterHP] = useState(dummyCharacters.HP);

  const heal = () => {
    setCharacterHP(characterHP + 10);
    if (dummyCharacters.HP < characterHP) {
      setCharacterHP((characterHP = dummyCharacters.HP));
    }
  };
  const chest = () => {
    dummyCharacters.attack += 4;
  };

  return (
    <div>
      <div>
        HP {characterHP}/{dummyCharacters.HP}
      </div>
      <Modal size="lg" show>
        <Modal.Title>
          You find a chest with a slight glimmer and a cart of potions. Which do
          you choose to take
        </Modal.Title>
        <button onClick={() => heal()}>Potions</button>
        <button onClick={() => chest()}>Open chest</button>
      </Modal>
    </div>
  );
};

export default Event1;
