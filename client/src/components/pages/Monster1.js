import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import orcImg from '../../assets/orc_monster.png'



const dummyCharacters = 
    {
  name: 'dummy',
      attack:15,
      HP:8             
    }
  
const Monster = {
    name: "orc",
    HP: 31,
    smallAttack: 2,
    bigAttack: 10
}




const MonsterBattle = (props) => {

const [monsterAttack, setmonsterAttack] = useState(0)
const [characterHP, setCharacterHP] = useState(dummyCharacters.HP)

const orcAttacks = () => {
    var number =  Math.floor(Math.random() * 2)
    console.log(number)
if (number === 1) {
    setmonsterAttack(Monster.bigAttack)
} else {
    setmonsterAttack(Monster.smallAttack)
}
}


    const [MonsterHP, setMonsterHP] = useState(Monster.HP)    
    const attack = (event) => {
        // event.preventDefault()
        console.log("attacks")
        setMonsterHP(MonsterHP - dummyCharacters.attack)
orcAttacks()

setCharacterHP(characterHP - monsterAttack)
}

    return(
<div>
<div>{MonsterHP}</div>

<div>The orc is attacking {monsterAttack}</div>
<div> HP {characterHP}/{dummyCharacters.HP}</div>

<button onClick={() => attack()}>Attack</button> 
<button onClick>Block</button>
<img src={orcImg}></img>


</div>

    )
}

export default MonsterBattle