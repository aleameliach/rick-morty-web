const FilterByName = (props) => {
    const handleName = (ev) => {
      props.handleSearchName(ev.target.value);
    };
    return (
      <fieldset className="form__name">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Search"
          value={props.name}
          onInput={handleName}
          className="form__name-input"
        ></input>
      </fieldset>
    );
  };
  export default FilterByName;