import React from 'react'
import SinglePokemon from '../Components/SinglePokemon'

const MyTeam = (props) => {
    return <div>
        {props.team.map((member) => {
            return <SinglePokemon selected={member} key={member.id} handleClick={props.remove} label='Remove from team'/>
        })}
    </div>
}
export default MyTeam