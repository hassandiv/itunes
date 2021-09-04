import React, { useContext, useState } from 'react'
import { StoreContext } from '../provider/StoreContext'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;
const StyledH2 = styled.h2`
    color: #fff;
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 600;
    line-height: 1.334;
    letter-spacing: 0em;
`;
const StyledFlexRow = styled.div`
    display: flex;
    flex-direction: row;
`;
const StyledRadioInput = styled.input`
    cursor: pointer;
    z-index: 1;
    &:focus {
        outline: none;
    }
    // &:checked {
    //     border: 2px solid #ffffff;
    // }
`;
const StyledLabel = styled.label`
    color: #ffffff;
    width: 100px;
`;
const StyledInput = styled.input`
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 50px;
    padding: 15px;
    color: #ffffff;
    outline: none;
    margin-top: 30px;
    z-index: 1;
`;

const SearchForm = () => {

    const { term, setTerm, music, setMusic } = useContext(StoreContext)

    const { song, album, musicArtist } = music
    console.log('song', song)
    console.log('album', album)
    console.log('musicArtist', musicArtist)

    const handleSelected = e => {
        setMusic({ [e.target.name]: true })
    }

    const handleChange = e => {
        setTerm(e.target.value)
    }

    return (
        <StyledForm>
            <StyledH2>Search by*</StyledH2>
                <StyledFlexRow>
                    <StyledRadioInput
                        type="radio"
                        name="song"
                        id="song"
                        value={song}
                        onChange={handleSelected}
                        checked={song ? true : false}
                        //required
                    />
                    <StyledLabel
                        id="kind"
                        htmlFor="kind"
                    >
                        Song
                    </StyledLabel>
                    <StyledRadioInput
                        type="radio"
                        name="musicArtist"
                        id="artist"
                        value={musicArtist}
                        onChange={handleSelected}
                        checked={musicArtist ? true : false}
                    //required
                    />
                    <StyledLabel
                        id="artistName"
                        htmlFor="artistName"
                    >
                        Artist
                    </StyledLabel>
                    <StyledRadioInput
                        type="radio"
                        name="album"
                        id="album"
                        value={album}
                        onChange={handleSelected}
                        checked={album ? true : false}
                    //required
                    />
                    <StyledLabel
                        id="collectionName"
                        htmlFor="collectionName"
                    >
                        Album
                    </StyledLabel>
                </StyledFlexRow>
                <StyledInput
                    type="search"
                    name="term"
                    placeholder="Artists, songs or albums"
                    value={term}
                    onChange={handleChange}
                />
        </StyledForm>
    )
}
export default SearchForm