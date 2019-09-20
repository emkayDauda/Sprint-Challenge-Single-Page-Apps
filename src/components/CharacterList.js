import React, { useEffect, useState } from "react";
import axios from 'axios';

import Character from'./CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

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
      {
        characters.filter(character => character.name.includes(searchTerm)).map(character => <Character character={character}/>)
      }
    </section>
  );
}
