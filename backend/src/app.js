import express from "express";
import cors from "cors";
import characterRoutes from "./routes/character.routes.js";

const app = express();

// JSON body'leri okuyabilmek için gerekli middleware
app.use(express.json());
app.use(cors());


app.use("/api/characters", characterRoutes);


// Basit bir test endpoint'i
app.get("/", (req, res) => {
  res.json({ message: "CharacterVerse API çalışıyor 🚀" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});