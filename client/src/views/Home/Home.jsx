import { useDispatch } from "react-redux";
import { CardsContainer} from "../../components/index.js";
import { useEffect } from "react";
import { getAllPokemons, getTypes } from "../../redux/actions.js";
import style from "./Home.module.css"

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllPokemons())
    dispatch(getTypes())
  },[dispatch])

  return (
    <div className={style.home}>
      <CardsContainer/>
        </div>
  );
};
export default Home;
