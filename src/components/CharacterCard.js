import { Link } from "react-router-dom";
const CharacterCard = ({ character }) => {
  return (
    <li className="characters___Art">
      <Link to={`/character/${character.id}`}>
        <article className="characters___Art___Info">
          <img
            className="characters___Art___Info--img"
            src={character.image}
            alt={`Foto de ${character.name}`}
          />
          <h3 className="characters___Art___Info--h3">{character.name}</h3>
          <p className="characters___Art___Info--p">{character.species}</p>
        </article>
      </Link>
    </li>
  );
};
export default CharacterCard;