import './App.css';
import React, { useEffect } from 'react'
import {Route, Switch} from "react-router-dom"
import Pokedex from './Pages/Pokedex'
import MyTeam from './Pages/MyTeam'
import Header from './Components/Header';
import {useState} from 'react'

function App() {

  const [team, setTeam] = useState([])

  const [pokeList, setPokeList] = useState([])

  const getPokeList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    const data = await response.json() 
    setPokeList(data.results)
   }

   const addToTeam = (pokemon) => {
    setTeam([...team, pokemon])
   }

   const removeFromTeam = (pokemon) => {
        const index = team.findIndex((poke) => (pokemon.id === poke.id))
        const updatedArray = [...team]
        updatedArray.splice(index, 1)
        setTeam(updatedArray)
   }

   useEffect(() => {getPokeList()}, [])

  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/'>
        <Pokedex pokeList={pokeList} addToTeam={addToTeam}/>
      </Route>
      <Route path='/MyTeam'>
        <MyTeam team={team} remove={removeFromTeam}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
