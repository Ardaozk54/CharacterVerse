import { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import FilterBar from "../components/FilterBar";
import { getAllCharacters } from "../services/characterApi";
import Spinner from "../components/Spinner";
import "./CharacterList.css";
import { Link } from "react-router-dom";

function CharacterListPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        const data = await getAllCharacters(filters);
        setCharacters(data);
        setError(null);
      } catch (err) {
        setError("There is a error when characters are loaded.");
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, [filters]);

  return (
    <div className="page-container">
      <h1 className="page-title">Characters</h1>

      <FilterBar onFilterChange={setFilters} />

      {loading && <Spinner />}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && characters.length === 0 && <p>No characters found.</p>}
      {!loading && !error && characters.length > 0 && (
        <div className="character-list">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}

      <div className="btn-add-c">
        <Link to="/add" className="btn-character">
          <span>Add Character</span>
        </Link>
      </div>
    </div>
  );
}

export default CharacterListPage;