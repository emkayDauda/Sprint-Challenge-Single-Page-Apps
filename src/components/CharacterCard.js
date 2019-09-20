import React from "react";
import {Name, StyledCharacter} from './StyledComponents'


export default function CharacterCard({character}) {

    return(
        <StyledCharacter>
            <img src={character.image} alt=""/>
            <Name>{character.name}</Name>
            <div>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
            </div>
            <p>Gender: {character.gender}</p>
            <p>Number of episodes: {character.episode.length}</p>
        </StyledCharacter>
    )
}
