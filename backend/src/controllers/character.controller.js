import { getAllCharacters , createCharacter, getCharacterById,updateCharacter,deleteCharacter, toggleCharacterFavorite } from "../services/character.service.js";

async function getAllCharactersHandler(req, res) {
  const characters = await getAllCharacters(req.query);
  res.status(200).json(characters);
}

async function  createCharacterHandler(req,res){

    const newCharacter = await createCharacter(req.body);
    res.status(201).json(newCharacter);

}

async function getCharacterByIdHandler(req,res) {
  try{
  const id = req.params.id;
  const character= await getCharacterById(id);
  res.status(200).json(character);
  } catch(error){
    res.status(404).json({message: error.message })
  }

  
}
async function updateCharacterHandler(req,res) {
  
  try{
    const id = req.params.id;
    const updatedCharacter=await updateCharacter(id,req.body);
    res.status(200).json(updatedCharacter);
  } catch (error) {
  if (error.message === "Character not found.") {
    res.status(404).json({ message: error.message });
  } else {
    res.status(400).json({ message: error.message });
  }
}
}


async function deleteCharacterHandler(req,res) {
  
  try{
    const id = req.params.id;
    const deletedCharacter=await deleteCharacter(id);
    res.status(200).json(deletedCharacter);
  } catch (error) {
  if (error.message === "Character not found.") {
    res.status(404).json({ message: error.message });
  } else {
    res.status(400).json({ message: error.message });
  }
 }


}

async function toggleCharacterFavoriteHandler(req,res){
  try {
    const id=req.params.id;
    const updatedCharacter = await toggleCharacterFavorite(id);
    res.status(200).json(updatedCharacter);

  }catch (error) {
  if (error.message === "Character not found.") {
    res.status(404).json({ message: error.message });
  } else {
    res.status(400).json({ message: error.message });
  }
}
}

export { getAllCharactersHandler,createCharacterHandler,getCharacterByIdHandler,updateCharacterHandler,deleteCharacterHandler,toggleCharacterFavoriteHandler};