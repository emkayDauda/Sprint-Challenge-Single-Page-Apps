import React, { useEffect, useState } from "react";
import axios from 'axios';

import Character from'./CharacterCard';
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  function onSubmit(formValues, actions){
    console.log(formValues);
    setSearchTerm(formValues.name)
    actions.resetForm();
  }

  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/')
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios.get(url)
    .then(response => {
      console.log(response.data);
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log(error);
      
    })
  }, [url]);

  return (
    <section className="character-list">
      <SearchForm onSubmit={onSubmit}/>

      {
        characters
          .filter(character => character.name.includes(searchTerm))
          .map(character => <Character key={character.id} character={character}/>)
      }
    </section>
  );
}
