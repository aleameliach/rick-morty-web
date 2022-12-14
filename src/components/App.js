import "../styles/App.scss";
import "../fonts/get_schwifty.ttf";

//HOOKS-----------
import { useEffect, useState } from "react";
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
//COMPONENTS-----
import DataApi from "../services/Api";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import Footer from "./Footer";



function App() {
//VARIABLES DE ESTADO----  
const [data, setData] = useState([]);
const [name, setName] = useState("");
const [species, setSpecies] = useState("");

//USE EFFECT----

useEffect(() => {
  DataApi().then((dataResults) => {
    setData(dataResults);
  });
}, []);

//HANDLE FUNCTIONS----
const handleForm = (ev) => {
  ev.preventDefault();
};

const handleSearchName = (value) => {
  setName(value);
};

//RENDER FUNCTIONS----
const filteredCharacters = data.filter((searchCharacter) =>
    searchCharacter.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

//ROUTES---- 
const CharacterFound = () => {
  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:characterId", pathname);
  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

  const characterFoundId = data.find(
    (character) => character.id === parseInt(characterId)
  );
  if (characterFoundId) {
    return characterFoundId;
  } else {
    return characterFoundId;
  }
};


  return (
    <div className="App">
    <Header></Header>
    <Routes>
      {/* Ruta home */}
      <Route
        path="/"
        element={
          <>
            <Filters
              handleForm={handleForm}
              name={name}
              specie={species}
              handleSearchName={handleSearchName}
            ></Filters>

            <CharacterList
              characters={filteredCharacters}
              name={name}
            ></CharacterList>
          </>
        }
      ></Route>
     

      <Route
        path="/character/:characterId"
        element={<CharacterDetail character={CharacterFound()} />}
      ></Route>
    </Routes>
  </div>
);
}

export default App;