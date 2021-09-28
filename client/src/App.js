import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterForm from './components/CharacterForm';
import Round1 from './components/pages/Round1'
import Monster1 from './components/pages/Monster1'
import Round2Left from './components/pages/Round2Left'
import MonsterLeft2 from './components/pages/MonsterLeft2'
import LeftBonusRoom from './components/pages/LeftBonusRoom'
import FinalBattle from './components/pages/FinalBattle'

import { ApolloProvider, InMemoryCache, HttpLink, ApolloClient  } from '@apollo/client';
// import ApolloClient from 'apollo-boost';
import {setContext} from '@apollo/client/link/context'
import './App.css'
import round2Left from './components/pages/Round2Left';

const httpLink = new HttpLink({
  uri: `http://localhost:3001/graphql`,
})


const authLink= setContext((_, {headers})=>
{
  const token = localStorage.getItem('id_token');
  return {
    headers:{
      ...headers,
      authorization: token ? `Bearer ${token}`:"",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      
      <>

        <Navbar />
        <Switch>
        <Route exact path='/round1' component={Round1} />
        <Route exact path='/' component= {CharacterForm}/>
        <Route exact path='/Monster1' component= {Monster1}/>
        <Route exact path='/Round2Left' component={Round2Left}/>
        <Route exact path='/MonsterLeft2' component={MonsterLeft2}/>
        <Route exact path='/LeftBonusRoom' component={LeftBonusRoom}/>
        <Route exact path='/FinalBattle' component={FinalBattle}/>

        </Switch>
      </>

    </Router>
    </ApolloProvider> 
  );
}

export default App;
