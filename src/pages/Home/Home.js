import React from 'react'
import SearchForm from "../../components/SearchForm/SearchForm";
import CocktailList from '../../components/CocktailList/CocktailList'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home;
