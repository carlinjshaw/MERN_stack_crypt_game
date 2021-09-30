import React from 'react';
import { Link } from 'react-router-dom';
import deathFace from '../../assets/deathFace.png'

const DeathPage = () => {
     
    return(
        <div>
You have been slain by cavernous enemies. Return home whilst you can. 
<button><Link to='/'>Homepage</Link></button>
<img src={deathFace}></img>
        </div>
    )
}

export default DeathPage;