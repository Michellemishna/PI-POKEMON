const { Pokemon, Type } = require("../db");

const createPokemon = async (id,name,image,hp,attack,defense,speed,height,weight,typeOne, typeTwo) => {

  // const pokemonExist = await
  const newPokemon = await Pokemon.create({id,name,image,hp,attack,defense,speed,height,weight})

  const types = [ typeOne, typeTwo === null || typeTwo === undefined ? '' : typeTwo ]

  for (const type of types) {
    const eachType = await Type.findOne({
        where: {name: type}
    })

await newPokemon.addType(eachType)
}
return newPokemon
};

module.exports = createPokemon;
