import { useState, useEffect } from "react";
import "./FilterBar.css";

function FilterBar({ onFilterChange }) {
  const [search, setSearch] = useState("");
  const [universe, setUniverse] = useState("");
  const [role,setRole] = useState("");
  const [status, setStatus] = useState("");
  const [favoriteOnly, setFavoriteOnly] = useState(false);
  const [minRating, setMinRating] = useState("");

  useEffect(() => {
    const filters = {};
    if (search) filters.search = search;
    if (universe) filters.universe = universe;
    if (role) filters.role = role;
    if (status) filters.status = status;
    if (favoriteOnly) filters.favorite = "true";
    if (minRating) filters.minRating = minRating;


    onFilterChange(filters);
  }, [search, universe, role ,status,favoriteOnly, minRating]);

  function handleReset() {
    setSearch("");
    setUniverse("");
    setRole("");
    setStatus("");
    setFavoriteOnly(false);
    setMinRating("");
  }

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="text"
        placeholder="Universe"
        value={universe}
        onChange={(e) => setUniverse(e.target.value)}
      />

       <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All statuses</option>
        <option value="ALIVE">Alive</option>
        <option value="DEAD">Dead</option>
        <option value="UNKNOWN">Unknown</option>
      </select>

      <input
        type="number"
        placeholder="Min rating"
        min="1"
        max="10"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      />

      <label className="favorite-checkbox">
        <input
          type="checkbox"
          checked={favoriteOnly}
          onChange={(e) => setFavoriteOnly(e.target.checked)}
        />
        Favorites only
      </label>

      <button onClick={handleReset} className="btn reset-btn">Reset</button>
    </div>
  );
}

export default FilterBar;