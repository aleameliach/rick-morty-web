const FilterBySpecies = (props) => {
    return (
      <fieldset className="form__species">
        <label> {props.species} </label>
        <label htmlFor="species" className="form__species-label">
          Human
        </label>
        <input id="species" type="checkbox" className="form__species-input" />
        <label htmlFor="species" className="form__species-label">
          Alien
        </label>
        <input id="species" type="checkbox" className="form__species-input" />
      </fieldset>
    );
  };
  export default FilterBySpecies;