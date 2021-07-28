
const AllPokemon = (props) => {
    return(
        <div className="scroll-item">
            <div className="all-pokemon">
                {props.pokeList.map((pokemon, index) => {
                    return <h1 onClick= {() => props.selectPokemon(pokemon)}>{pokemon.name}</h1>
    })}
    </div>
    </div>
    )


}
export default AllPokemon