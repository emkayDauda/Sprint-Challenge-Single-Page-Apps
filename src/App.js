import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import Welcome from './components/WelcomePage';
import CharaList from './components/CharacterList'
import LocationList from './components/LocationsList'
import SearchForm from './components/SearchForm'
import Navigation from './components/Navigation';


export default function App() {
  return (
    <>
    <main>
      <Header />
      <Navigation />
      <Route exact path='/' component={Welcome} />
      <Route path='/characters' component={CharaList} />
      <LocationList />
      <SearchForm />
    </main>
    </>
  );
}
