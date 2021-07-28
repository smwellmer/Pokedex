import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return <div className='header'>
        <Link to='/'>
            <div>Pokedex</div>
        </Link>
        <a href="https://www.pokemon.com/us/">
        <img className="logo" src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pokemon-logo.png" alt="Pokemon Logo"></img>
        </a>
        <Link to='/MyTeam'>
            <div>My Team</div>
        </Link>
    </div>
}
export default Header