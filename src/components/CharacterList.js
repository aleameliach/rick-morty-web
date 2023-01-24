import CharacterCard from "./CharacterCard";
import "../styles/components/SectionListCharacters.scss";


const CharacterList = ({ characters, name }) => {
  // Para ordenar el array.
  characters.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
  const elementList = characters.map((character) => {
    return (
      <CharacterCard character={character} key={character.id}></CharacterCard>
    );
  });

  const messageError = () => {
    if (characters.length !== 0) {
      return elementList;
    } else {
      return (
        <section className="characters__message">          
              {`There's no match in this universe for ${name}`}        
        </section>
      );
    }
  };

  return (
    <section className="characters">
      <ul className="characters__List">{messageError()}</ul>
    </section>
    
  );
};
export default CharacterList;