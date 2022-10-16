import React from "react";
import CocktailList from "../components/CocktailList";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
