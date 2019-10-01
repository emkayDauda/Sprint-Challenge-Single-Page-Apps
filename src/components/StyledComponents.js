import React from 'react';
import styled from 'styled-components';

export const StyledCharacter = styled.div`
border: .2rem solid green;
border-radius: 3rem;
padding: 2.5rem;
width: 30%;
margin: 1.3rem 1rem;

img {
    width: 85%;
    height: 25rem;
    border-radius: 2rem;
    margin: 0 auto;
}

p {
    color: green;
}

div {
    display: flex;
    justify-content: space-between
}

button {
    border-radius: 5px;
    margin: 3px auto;
    background: none;
}
`

export const Name = styled.p`
font-family: 'Tangerine', serif;
font-size: 4rem;
`

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`