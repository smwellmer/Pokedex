import React from 'react'
// import {Link} from 'react-router-dom'
import AllPokemon from '../Components/AllPokemon'
import SinglePokemon from '../Components/SinglePokemon'
import {useState} from 'react'


const Pokedex = (props) => {

    const [selected, setSelected] = useState(null)

    const selectPokemon = async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        setSelected({
            id: data.id,
            name: data.name,
            type: data.types[0].type.name,
            img: data.sprites.front_default
        })
    }


    return (
    <div className="pokedex">
            <AllPokemon pokeList={props.pokeList} selectPokemon={selectPokemon}/>
            <SinglePokemon selected={selected} handleClick={props.addToTeam} label="Add to Team"/>
    </div>
        
    )
}
export default Pokedex