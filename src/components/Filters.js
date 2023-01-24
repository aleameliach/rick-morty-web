import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../styles/components/Filters.scss";

const Filters = (props) => {

  const handleOnClick = () => {
		props.handleReset();
	};
  return (
    <form onSubmit={props.handleForm} className="form">
      <FilterByName
        name={props.name}
        handleSearchName={props.handleSearchName}
      ></FilterByName>
      <FilterBySpecies
        filterSpecie={props.filterSpecie}
        species={props.species}
        handleFilterSpecies={props.handleFilterSpecies}>   
      </FilterBySpecies>
      <button className="form__btn" onClick={handleOnClick}>
				Reset
			</button>
    </form>
  );
};
export default Filters;