import prisma from "../prismaClient.js";

 async function findAll(filters) {
  const characters = await prisma.character.findMany({
    where: filters, 
  })
  return characters;
}


async function findById(id){
const character = await prisma.character.findUnique({where:{id: Number(id)}});
return character;

}

async function update (id,characterData){
   
  const updatedCharacter = await prisma.character.update({where: {id: Number(id)},
                                                         data:characterData,
 })
 return updatedCharacter;

}

async function create(characterData) {
  const newCharacter = await prisma.character.create({data: characterData});
  return newCharacter;
}

async function remove(id){
  
   const deletedCharacter= await prisma.character.delete({
    where:{id: Number(id),}
   })

   return deletedCharacter;
}

async function toggleFavorite(id){
  const character = await findById(id);
  const updatedCharacter = await prisma.character.update({
    where:{id:Number(id)},
    data:{isFavorite:!character.isFavorite},
    }
  )
  return updatedCharacter;
}



export { findAll ,findById, create,update ,remove,toggleFavorite};