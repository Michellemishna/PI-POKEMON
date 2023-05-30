const { Router } = require('express');

const getPokemons = require ('../handlers/getPokemons')
const getPokemonsbyId = require ('../handlers/getPokemonsbyId')
const getTypes = require ('../handlers/getTypes')
const postNewPokemon = require ('../handlers/postNewPokemon')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemons', getPokemons );

router.get('/pokemons/:id', getPokemonsbyId );

router.post('/pokemons', postNewPokemon );

router.get('/types', getTypes )



module.exports = router;
