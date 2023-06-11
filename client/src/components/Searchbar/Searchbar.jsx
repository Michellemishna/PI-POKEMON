import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByNamePokemon } from "../../redux/actions";
import style from "./Searchbar.module.css"

const Searchbar = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();


    const handleChange = (event) => {
        setName(event.target.value);
    }

    const onSearch = (event) => {
        event.preventDefault()
        dispatch(getByNamePokemon(name));
    }

    return(
        <div className={style.searchbar}>
            <form onSubmit={onSearch}>
            <input type="search" onChange={handleChange} placeholder="name..."/>
            <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;