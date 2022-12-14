const FilterByName = (props) => {
    const handleName = (ev) => {
      props.handleSearchName(ev.target.value);
    };
    return (
      <fieldset className="form__name">
        <label htmlFor="city" className="form__name-title">
          Search your favorite character
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={props.name}
          onInput={handleName}
          className="form__name-input"
        ></input>
      </fieldset>
    );
  };
  export default FilterByName;