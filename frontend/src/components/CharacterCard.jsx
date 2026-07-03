import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { toggleFavorite } from "../services/characterApi";
import "./CharacterCard.css";

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();HA
}

function CharacterCard({ character }) {
  const [isFavorite, setIsFavorite] = useState(character.isFavorite);
  const statusClass = character.status?.toLowerCase() || "unknown";

  async function handleFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();

    try {
      const updated = await toggleFavorite(character.id);
      setIsFavorite(updated.isFavorite);
    } catch (error) {
      toast.error("Failed to update favorite.");
    }
  }

  return (
    <Link to={`/characters/${character.id}`} className={`character-card status-${statusClass}`}>
      <button className="favorite-btn" onClick={handleFavoriteClick}>
        {isFavorite ? "★" : "☆"}
      </button>

      {character.imageUrl ? (
        <img src={character.imageUrl} alt={character.name} className="character-avatar-img" />
      ) : (
        <div className="character-avatar">{getInitials(character.name)}</div>
      )}
      <div className="character-info">
        <h3>{character.name}</h3>
        <p className="character-universe">{character.universe}</p>
        <div className="character-meta">
          <span className="character-rating">★ {character.rating}</span>
          <span className={`character-status status-badge-${statusClass}`}>
            {character.status}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;