// AddCharacterPage.jsx

import { Link } from "react-router-dom";
import CharacterForm from "../components/CharacterForm";
import "./AddCharacterPage.css"

function AddCharacterPage() {
  return (
    <div className="container">
        <CharacterForm />
    </div>
  );
}

export default AddCharacterPage;