import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
          } = data.drinks[0];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  console.log(cocktail);

  const { name, instructions, info, image, glass, category } = cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>

      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} />
        <div>
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>

          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>

          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>

          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>

          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
