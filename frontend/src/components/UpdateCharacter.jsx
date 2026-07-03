import { useEffect, useState } from "react";
import "./CharacterForm.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getCharacterById,
  updateCharacter,
  uploadImage,
} from "../services/characterApi";

function UpdateCharacter() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [universe, setUniverse] = useState("");
  const [skill, setSkill] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("ALIVE");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function loadCharacter() {
      try {
        const character = await getCharacterById(id);

        setName(character.name);
        setUniverse(character.universe);
        setRole(character.role);
        setSkill(character.skill);
        setRating(character.rating);
        setStatus(character.status);
        setDescription(character.description);
        setImageUrl(character.imageUrl);
      } catch (error) {
        toast.error("Character could not be loaded.");
      }
    }

    loadCharacter();
  }, [id]);

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setUploading(true);
      const uploadedUrl = await uploadImage(file);
      setImageUrl(uploadedUrl);
      toast.success("Image uploaded!");
    } catch (error) {
      toast.error("Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const updatedCharacter = {
      name,
      universe,
      role,
      skill,
      rating: Number(rating),
      status,
      description,
      imageUrl,
    };

    try {
      await updateCharacter(id, updatedCharacter);
      toast.success("Character updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="add-page">
      <Link to="/" className="back-link">
        ← Back to characters
      </Link>

      <h1 className="add-title">Update Character</h1>

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Universe</label>
          <input
            type="text"
            value={universe}
            onChange={(e) => setUniverse(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Skill</label>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <input
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="ALIVE">Alive</option>
            <option value="DEAD">Dead</option>
            <option value="UNKNOWN">Unknown</option>
          </select>
        </div>

        <div className="form-group">
          <label>Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {uploading && <p>Uploading...</p>}

          {imageUrl && (
            <img
              src={imageUrl}
              alt="Preview"
              className="image-preview"
            />
          )}
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            style={{ resize: "none" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <Link to="/" className="btn">
            <span>Cancel</span>
          </Link>

          <button type="submit" className="btn btn-primary">
            Update Character
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCharacter;