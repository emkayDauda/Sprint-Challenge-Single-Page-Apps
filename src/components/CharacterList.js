import React, { useEffect, useState } from "react";
import axios from 'axios';

import Character from'./CharacterCard';
import SearchForm from './SearchForm'
import { StyledContainer } from './StyledComponents'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  function onSubmit(formValues, actions){
    console.log(formValues);
    const name = formValues.name
    const serverSearch = formValues.check
    console.log(serverSearch);
    
    
    if (serverSearch){
      const term = `?name=${name}`
      setUrl(url+term)
    }
    else {
      setSearchTerm(name)      
    }
    console.log(searchTerm);
    
    actions.resetForm();
  }

  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/')
  const [searchTerm, setSearchTerm] = useState("")
  const [nextPage, setNextPage] = useState("")
  const [previousPage, setPreviousPage] = useState("")

  useEffect(() => {
    const newCharacters = characters.filter(character => character.name.includes(searchTerm))
    setCharacters(newCharacters)
  }, [])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios.get(url)
    .then(response => {
      console.log(response.data);
      setNextPage(response.data.info.next)
      setPreviousPage(response.data.info.prev)
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log(error);
      
    })
  }, [url]);

  function switchPage(page){
    if (page === 'next'){
      setUrl(nextPage)
    } else {
      setUrl(previousPage)
    }
  }

  return (
    <section className="character-list">
      <SearchForm onSubmit={onSubmit}/>

      <StyledContainer>
      {
        characters
          .map(character => <Character key={character.id} character={character}/>)
      }
      </StyledContainer>

      <button disabled={previousPage === ""} onClick={() => switchPage('previous')}>Previous</button>
      <button onClick={() => switchPage('next')}>Next</button>
    </section>
  );
}
