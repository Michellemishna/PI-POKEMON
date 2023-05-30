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
    history.replace('/home')
  };

  const handleFilters = (event) => {
    dispatch(filterPokemons(event.target.value));
    setPage(1);
    history.replace('/home')
  };

  const handleSort = (event) => {
    dispatch(orderPokemons(event.target.value));
    setPage(1);
    history.replace('/home')
  };

  const showAllPPokemons = () => {
    dispatch(cleanInfoFilters())
    dispatch(getAllPokemons())
  }
  return (
    <div>
      <div className={style.contentFilters} >
      <select className={style.filters} onChange={handleSort}>
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
      </select>

      <select className={style.filters} onChange={handleFiltersTypes}>
        <option value="All" hidden>Types</option>
          {types.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}  
      </select>

      <select className={style.filters} onChange={handleFilters}>
        <option value="Stored Pokemon">Exist</option>
        <option value="Created Pokemon">Create</option>
      </select>
      <button className={style.filters} onClick={()=>showAllPPokemons()}>Mostrar todos los Pokemons</button>
      </div>
      <Paginado className={style.Paginado}
        viewPage={viewPage} pokemons={pokemons.length} paginado={paginado} page={page} />
     <br />
      <div className={style.ContCards}>
        {viewPokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />);
        })}
        <br />
      </div>
      <Paginado viewPage={viewPage} pokemons={pokemons.length} paginado={paginado} page={page}/>
    </div>
  );
};

export default CardsContainer;
