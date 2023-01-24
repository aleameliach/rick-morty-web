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
const [filterSpecies, setFilterSpecies] = useState([]);
const [filterGender, setFilterGender] = useState("all") 

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

const handleGender = (value) =>{
  setFilterGender(value);
};

const handleFilterSpecies = (value) => {
  if (filterSpecies.includes(value)) {
    const position = filterSpecies.indexOf(value);
    filterSpecies.splice(position, 1);
    setFilterSpecies([...filterSpecies]);
  } else {
    setFilterSpecies([...filterSpecies, value]);
  }
};

//RENDER FUNCTIONS----
const paintSpecies = () => {
    const characterSpecies = data.map((character) => character.species);
    const oneSpecies = characterSpecies.filter((character, index) => {
      return characterSpecies.indexOf(character) === index;
    });
    return oneSpecies;
  };

const filteredCharacters = data
  .filter((searchCharacter) =>
    searchCharacter.name
    .toLocaleLowerCase()
    .includes(name.toLocaleLowerCase())
)
.filter((character) => {
  if (filterSpecies.length === 0) {
    return true;
  } else {
    return filterSpecies.includes(character.species);
  }
})
.filter((character)=> {
if (filterGender === "all") {
  return true;
} else{
  return character.gender.includes(filterGender)
};

}

)
;

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
                handleSearchName={handleSearchName}
                filterSpecie={filterSpecies}
                species={paintSpecies()}
                handleFilterSpecies={handleFilterSpecies}
              
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