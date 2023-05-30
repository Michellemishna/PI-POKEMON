import {Link} from "react-router-dom"
import style from "./Card.module.css"

const Card = (pokemon) => {
    return(
        <div className={style.Card}>
            <Link className={style.link} to={`/detail/${pokemon.id}`}>
                <h4>{pokemon.name.toUpperCase()}</h4>
            </Link>
            <img src={pokemon.image} alt="img" />
            <p>Types: {pokemon.types}</p> 
        </div>
    )
}

export default Card;