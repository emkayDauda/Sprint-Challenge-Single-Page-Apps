import React from "react";
import Header from "./components/Header.js";
import Welcome from './components/WelcomePage';
import CharaList from './components/CharacterList'
import LocationList from './components/LocationsList'
import SearchForm from './components/SearchForm'


export default function App() {
  return (
    <main>
      <Header />
      <Welcome />
      <CharaList />
      <LocationList />
      <SearchForm />
    </main>
  );
}
