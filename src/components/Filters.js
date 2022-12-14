import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../styles/components/Filters.scss";

const Filters = (props) => {
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
    </form>
  );
};
export default Filters;