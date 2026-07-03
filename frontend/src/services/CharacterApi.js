const API_URL = "http://localhost:3000/api/characters";

async function getAllCharacters(filters={}) {
  const params = new URLSearchParams(filters);
  const response = await fetch(`${API_URL}?${params}`);
  const data = await response.json();
  return data;
}

async function getCharacterById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
}

async function createCharacter(characterData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(characterData),
  });
  const data = await response.json();
  return data;
}

async function deleteCharacter(id){
  const response = await fetch (`${API_URL}/${id}`,{
    method:"DELETE"
  });
  const data = await response.json();
  return data;
}
async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data.imageUrl;
}

async function toggleFavorite(id) {
  const response = await fetch(`${API_URL}/${id}/favorite`, {
    method: "PATCH",
  });
  const data = await response.json();
  return data;
}

async function updateCharacter(id, characterData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(characterData),
  });

  const data = await response.json();
  return data;
}

export { getAllCharacters , getCharacterById,createCharacter,deleteCharacter,uploadImage,toggleFavorite,updateCharacter};