import React from "react";
import Cocktail from "../Cocktail/Cocktail";
import Loading from "../Loading/Loading";
import { useGlobalContext } from "../../context";
import './CocktailList.css';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">no cocktail matched your search!</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">
        cocktail list
      </h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return (
            <Cocktail key={item.id} {...item} />
          )
        })}
      </div>
    </section>
  );
};

export default CocktailList;
