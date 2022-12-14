import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import "../styles/components/Filters.scss";
const Filter = (props) => {
    return (
      <form onSubmit={props.handleForm} className="form">
        <FilterByName
          name={props.name}
          handleSearchName={props.handleSearchName}
        ></FilterByName>
        <FilterBySpecies specie={props.specie}></FilterBySpecies>
      </form>
    );
  };
  export default Filter;