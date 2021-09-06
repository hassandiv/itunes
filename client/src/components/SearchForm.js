import React, { useContext } from 'react'
import { StoreContext } from '../provider/StoreContext'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px;
    @media (max-width: 550px) {
        width: 300px;
    }
    @media (max-width: 330px) {
        width: 280px;
    }
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

    const { term, setTerm, setMusic, entity, setEntity } = useContext(StoreContext)

    const handleSelected = e => {
        setMusic({ [e.target.name]: true })
        const value = e.target.value;
        setEntity(value)
    }
    const handleChange = e => {
        const value = e.target.value
        setTerm(value)
    }

    return (
        <StyledForm>
            <StyledH2>Search by*</StyledH2>
            <StyledFlexRow>
                <StyledRadioInput
                    type="radio"
                    name="song"
                    id="song"
                    value="song"
                    checked={entity === "song"}
                    onChange={handleSelected}
                />
                <StyledLabel
                    id="kind"
                    htmlFor="kind"
                >
                    Song
                </StyledLabel>
                <StyledRadioInput
                    //data-cy="artist-radio-btn"
                    type="radio"
                    name="musicArtist"
                    id="artist"
                    value="musicArtist"
                    checked={entity === "musicArtist"}
                    onChange={handleSelected}
                />
                <StyledLabel
                    id="artistName"
                    htmlFor="artistName"
                >
                    Artist
                </StyledLabel>
                <StyledRadioInput
                    //data-cy="album-radio-btn"
                    type="radio"
                    name="album"
                    id="album"
                    value="album"
                    checked={entity === "album"}
                    onChange={handleSelected}
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