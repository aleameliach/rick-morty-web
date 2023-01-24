import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";
import error from "../images/error.png";
import portal from "../images/portal.png";

const CharacterDetail = (props) => {
  if (props.character !== undefined){
  
  return (
    <section className="characterSection">
      <div className="goBack">
        <Link className="goBack-icon" to="/">
          Return
        </Link>
      </div>
      <section className="character">
        <article className="character__DetailItem">
          <img
            className="character__DetailItem-img"
            src={props.character.image}
            alt={`${props.character.name} 's Pic`}
          />
          <section className="charInfo">
            <h3 className="charInfo-h3">{props.character.name}</h3>
            <p className="charInfo-p">{`Specie: ${props.character.species}`}</p>
            <p>{`Origin: ${props.character.origin.name}`}</p>
            <p className="charInfo-p">{`Episodie: ${props.character.episode.length}`}</p>
            <p className="charInfo-p">{`Status: ${props.character.status}`}</p>
          </section>
        </article>
      </section>
    </section>
  );
} else {
  return(
    <article className="error-url">
    <img className="error-url__img" src={error} alt="Rick and Morty" />
    <div className="error-url__text">
      <div className="error-url__text__404">
        <p>4</p>
        <img
          className="error-url__text__404--img"
          src={portal}
          alt="Green portal"
        />
        <p>4</p>
      </div>
      <p className="error-url__text__msg">
        The character you're trying to find doesn't exist
      </p>
      <Link className="error-url__text__btn" to="/">
        Go back to characters
      </Link>
    </div>
  </article>

  )
}
};
export default CharacterDetail;