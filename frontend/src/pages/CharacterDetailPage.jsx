import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getCharacterById, deleteCharacter } from "../services/characterApi";
import { toggleFavorite } from "../services/characterApi";
import "./CharacterDetailPage.css";


function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CharacterDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite,setIsFavorite]=useState(false);


  useEffect(() => {
    async function fetchCharacter() {
      try {
        setLoading(true);
        const data = await getCharacterById(id);
        setCharacter(data);
        setError(null);
      } catch (err) {
        setError("Character not found.");
      } finally {
        setLoading(false);
      }
    }
    fetchCharacter();
  }, [id]);



     useEffect(() => {
  if (character) {
    setIsFavorite(character.isFavorite);
  }
}, [character]);
  
 

  async function handleFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();

    try {
      const updated = await toggleFavorite(character.id);
      setIsFavorite(updated.isFavorite);
    } catch (error) {
      toast.error("Failed to update favorite.");
      console.log(error);
    }
  }

   async function handleDelete() {
    const confirmed = window.confirm(`Are you sure you want to delete ${character.name}?`);
    if (!confirmed) return;

    try {
      await deleteCharacter(id);
      toast.success("Character deleted.");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete character.");
    }
  }

   function handleUpdate() {
  navigate(`/characters/edit/${character.id}`);
}
  

  if (loading) {
    return <p className="page-container">Loading...</p>;
  }

  if (error) {
    return (
      <div className="page-container">
        <p>{error}</p>
        <Link to="/" className="back-link">← Back to characters</Link>
      </div>
    );
  }





  const statusClass = character.status?.toLowerCase() || "unknown";
  

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Back to characters</Link>

      <div className={`detail-card status-${statusClass}`}>

       <button className="favorite-btn" onClick={handleFavoriteClick}>
        {isFavorite ? "★" : "☆"}
      </button>

          {character.imageUrl ? (
  <img src={character.imageUrl} alt={character.name} className="character-avatar-img" />
) : (
  <div className="character-avatar">{getInitials(character.name)}</div>
)}

        <div className="detail-header">
          <h1>{character.name}</h1>
          <p className="detail-universe">{character.universe}</p>
          <div className="detail-badges">
            <span className="character-rating">★ {character.rating}/10</span>
            <span className={`character-status status-badge-${statusClass}`}>
              {character.status}
            </span>
          </div>
        </div>

        <div className="detail-stats">
          <div className="stat-row">
            <span className="stat-label">Role</span>
            <span className="stat-value">{character.role || "—"}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Skill</span>
            <span className="stat-value">{character.skill || "—"}</span>
          </div>
        </div>

        <p className="detail-description">{character.description}</p>
      </div>

       <div className="detail-actions">
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete Character
          </button>
   
         <button className="btn btn-primary" onClick={handleUpdate}>
         Update Character
         </button>
          </div>
    </div>
  );
}

export default CharacterDetailPage;