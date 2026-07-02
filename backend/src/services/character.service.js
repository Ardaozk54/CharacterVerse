import { findAll,create, findById,update,remove,toggleFavorite} from "../repositories/character.repository.js";


async function getAllCharacters(queryParams) {
  const filters = {};
  if(queryParams.search){
    filters.name={contains: queryParams.search};
  }
    if (queryParams.universe) {
    filters.universe = queryParams.universe;
}
    if (queryParams.role) {
    filters.role = queryParams.role;
}
  if (queryParams.status) {
  filters.status = queryParams.status;
}
if (queryParams.favorite === "true") {
  filters.isFavorite = true;
}

if (queryParams.minRating) {
  filters.rating = { gte: Number(queryParams.minRating) };
}
  const characters = await findAll(filters);
  

  return characters ;
}

async function getCharacterById(id){
  const character = await findById(id);

  if(!character){
    throw new Error("Character not found.")
  }
  return character;
}


async function createCharacter( characterData ){
const newCharacter = await create(characterData);
return newCharacter;

}

async function updateCharacter(id, characterData) {
    await getCharacterById(id); 
    if (characterData.rating && (characterData.rating < 1 || characterData.rating > 10)) {
      throw new Error ("Rating must be between 1 and 10.");
    }
  const updatedCharacter = await update(id, characterData);
  return updatedCharacter;
}

async function deleteCharacter(id){
  await  getCharacterById(id);

  const deletedCharacter=await remove(id);
  return deletedCharacter;

}

async function toggleCharacterFavorite(id) {
  await getCharacterById(id);

  const updatedToggleCharacter = await toggleFavorite(id);
  return updatedToggleCharacter;
  
}
export { getAllCharacters,getCharacterById,createCharacter,updateCharacter,deleteCharacter,toggleCharacterFavorite};