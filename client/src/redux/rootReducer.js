import { CLEAN_DETAIL, CLEAN_INFO_FILTERS, FILTER_POKEMONS, FILTER_TYPES, GET_ALL_POKEMONS, GET_DETAIL_POKEMON, GET_POKEMON_BY_NAME, GET_TYPES, ORDER_POKEMONS } from "./typeActions";

const initialState = {
    pokemons: [],
    allPokemons: [],
    pokemonDetails: {},
    types: [],

    filterInfo:[],
    errors:{},
  }

const rootReducer = (state = initialState,action) =>{
    switch (action.type) {
        case GET_ALL_POKEMONS: return{
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        }
        case GET_DETAIL_POKEMON: return{
            ...state,
            pokemonDetails: action.payload,
            errors:{}
        }
        case GET_TYPES: return{
            ...state,
            types: action.payload,
            errors:{}
        }
        case GET_POKEMON_BY_NAME: return{
            ...state,
            pokemons:action.payload,
            errors:{}
        }
        case CLEAN_DETAIL: return{
            ...state, 
            pokemonDetails: '',
            
        }
        case FILTER_TYPES: 
            const allPokemons = state.allPokemons;
           let typeFilter;

            if(action.payload === "All") {
                typeFilter = allPokemons 
            }else{
            typeFilter= allPokemons.filter(pokemon => {
                const types = pokemon.types.split(', ')

                return types.map(type => type.toLowerCase()).includes(action.payload.toLowerCase())
            })
            }
            return {
                ...state, 
                pokemons: typeFilter,
              }

        case FILTER_POKEMONS: 
            const pokemonApi = state.allPokemons;
            const createFilter =(action.payload === "Stored")? pokemonApi.filter((pokemon) => pokemon.createInDb === false) :
             (action.payload === "Created") ? pokemonApi.filter((pokemon) => pokemon.createInDb === true)
             : pokemonApi
            return{
                ...state,
                pokemons: createFilter || pokemonApi,
                filterInfo: (action.payload === "AllPokemons")? [] : [action.payload]            }

        case ORDER_POKEMONS: 
            const pokemons = state.pokemons.slice();     
            const Sort = (action.payload === 'Descendente'? pokemons.sort((a,b) => {    
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;  
                    return 0;
                }) : (action.payload === 'Ascendente')? pokemons.sort((a,b) => {         
                    if (a.name < b.name)  return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }) : pokemons)
            return{
            ...state,
            pokemons: Sort
            }
            case "ERROR":
    return{
      errors: action.payload,
    }
            case CLEAN_INFO_FILTERS: return{
                ...state,
                filterInfo: []
            }
       
        default: return{
            ...state
            }
    }};

export default rootReducer;