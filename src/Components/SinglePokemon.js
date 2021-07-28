

const SinglePokemon = (props) => {

    const loaded = () => {
        return( 
        <div className="name">
            <h1>{props.selected.name}</h1>
            <img src={props.selected.img} alt={props.selected.name}/>
            <h2>TYPE {props.selected.type}</h2>
            <button onClick ={() => {props.handleClick(props.selected)}}>{props.label}</button>
        </div>
        )
    }

    const loading = () => {
        return <h1 className="loading">Click on a Pokemon to see more info!</h1>
    } 
    
    return props.selected ? loaded() : loading()
}
export default SinglePokemon