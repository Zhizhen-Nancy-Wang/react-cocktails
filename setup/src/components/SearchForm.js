import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label for="name">Search Your Favorite Cocktail</label>
          <input type="text" onChange={handleChange}></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
