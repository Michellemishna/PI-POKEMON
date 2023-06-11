import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleanInfoFilters, filterPokemons,filterTypesPokemons,getAllPokemons,orderPokemons} from "../../redux/actions";
import Paginado from "../Paginator/Paginator";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";
import style from "./CardsContainer.module.css"

const CardsContainer = () => {
  const pokemons = useSelector(state => state.pokemons);
  const types = useSelector(state => state.types);
  const filters = useSelector(state => state.filterInfo)

  //Paginado
  const [page, setPage] = useState(1);
  const viewPage = 12;
  const lastPage = page * viewPage;
  const firstPage = lastPage - viewPage;
  const viewPokemons = pokemons.slice(firstPage, lastPage);
  const history = useHistory();
  const dispatch = useDispatch();

  const paginado = (pageNum) => {
    setPage(pageNum);
  };

  const handleFiltersTypes = (event) => {
    dispatch(filterTypesPokemons(event.target.value));
    setPage(1);
  };

  const handleFilters = (event) => {
    dispatch(filterPokemons(event.target.value));
    setPage(1);
  };

  const handleSort = (event) => {
    dispatch(orderPokemons(event.target.value));
    setPage(1);
    history.replace('/home')
  };

  const showAllPokemons = () => {
    dispatch(cleanInfoFilters())
    dispatch(getAllPokemons())
  }
  return (
    <div>
      <div className={style.contentFilters} >
      <img alt="img" src="https://25.media.tumblr.com/a1e87d2030a73aee16661e8807da6c1d/tumblr_mkhnmmFwaA1rxvkeso1_500.gif"/>

      <select className={style.filters} onChange={handleSort}>
      <option value="All" hidden>Orden</option>
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
      </select>

      <select className={style.filters} onChange={handleFiltersTypes}>
        <option value="All" hidden>Types</option>
        <option value="All" >All</option>
          {types.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}  
      </select>

      <select className={style.filters} onChange={handleFilters}>
      <option value="All" hidden>Storage</option>
      <option value= "AllPokemons">All Pokemons</option>
        <option value="Stored">Exist</option>
        <option value="Created">Create</option>
      </select>
      <button className={style.filters} onClick={()=>showAllPokemons()}>Show all Pokemons</button>
      </div>
      <Paginado className={style.Paginado}
        viewPage={viewPage} pokemons={pokemons.length} paginado={paginado} page={page} />
     <br />
      <div className={style.ContCards}>
        {viewPokemons.length !== 0 ? viewPokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />);
        }): (viewPokemons.length === 0 && handleFilters.event === 0 ) ?
        <div><h2>There are no video games with those filters applied.</h2></div>:
        <div>
        <h2>Loading...</h2>
        <img  src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="gif"/></div> 
               }
        <br />
      </div>
      <Paginado viewPage={viewPage} pokemons={pokemons.length} paginado={paginado} page={page}/>
    </div>
  );
};

export default CardsContainer;
