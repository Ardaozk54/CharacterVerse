import { Router } from "express";
import { getAllCharactersHandler,createCharacterHandler ,getCharacterByIdHandler, updateCharacterHandler, deleteCharacterHandler, toggleCharacterFavoriteHandler} from "../controllers/character.controller.js";

const router = Router();

router.get("/", getAllCharactersHandler);
router.post("/",createCharacterHandler);
router.get("/:id",getCharacterByIdHandler);
router.patch("/:id",updateCharacterHandler);
router.delete("/:id",deleteCharacterHandler);
router.patch("/:id/favorite",toggleCharacterFavoriteHandler);
export default router;