import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CharacterListPage from "./pages/CharacterListPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import AddCharacterPage from "./pages/AddCharacterPage";
import UpdateCharacter from "./components/UpdateCharacter";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
  <ThemeProvider>
    <BrowserRouter>
     <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<CharacterListPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage/>} />
        <Route path="/add" element={<AddCharacterPage/>} />
        <Route path="/characters/edit/:id" element={<UpdateCharacter />} />

        


      
      </Routes>
    <ThemeToggle />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;