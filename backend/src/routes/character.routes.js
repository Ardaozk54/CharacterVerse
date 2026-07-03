import { Router } from "express";
import { getAllCharactersHandler,createCharacterHandler ,getCharacterByIdHandler, updateCharacterHandler, deleteCharacterHandler, toggleCharacterFavoriteHandler} from "../controllers/character.controller.js";
import upload from "../upload.js";

const router = Router();

router.get("/", getAllCharactersHandler);
router.post("/",createCharacterHandler);
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }
  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});
router.get("/:id",getCharacterByIdHandler);
router.patch("/:id",updateCharacterHandler);
router.delete("/:id",deleteCharacterHandler);
router.patch("/:id/favorite",toggleCharacterFavoriteHandler);
export default router;