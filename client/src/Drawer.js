import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchForm from './components/SearchForm'

const StyledFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    height: 340px;
`;
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    width: 100%;
    padding: 0px;
    margin-bottom: 0px;
    @media (max-width: 550px) {
        width: 320px;
    }
`;
const StyledMenuUl = styled.ul`
    display: none;
    padding: 0px;
    @media (max-width: 768px) {
        margin: 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    @media (max-width: 550px) {
        width: 320px;
    }
`;
const StyledLi = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 0.5s all;
    padding: 10px 20px;
    margin: 2px 0px;
    cursor: pointer;
    border-radius: 5px;
    background-color: transparent;
    &:hover {
        background-color: #1d1c1c;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    padding: 0px;
    margin: 0px;
`;
const StyledIcon = styled.img`
    display: block;
    width: 20px;
    height: 100%;
    cursor: pointer;
    padding-right: 15px;
`;

const Drawer = () => {

    return (
        <StyledFlex>
            <StyledUl>
                <StyledLi>
                    <StyledIcon alt="Home" src="/home.svg" />
                    <StyledLink to="/">
                        Home
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledIcon alt="Your Library" src="/library.svg" />
                    <StyledLink to="/">
                        Your Library
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledIcon alt="nLiked songs" src="/like.svg" />
                    <StyledLink to="/">
                        Liked Songs
                    </StyledLink>
                </StyledLi>
            </StyledUl>
            <StyledMenuUl>
                <StyledLi>
                    <StyledIcon alt="Premium" src="/premium-badge.svg" />
                    <StyledLink to="/">
                        Premium
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledIcon alt="Support" src="/help.svg" />
                    <StyledLink to="/">
                        Support
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledIcon alt="Download" src="/cloud-computing.svg" />
                    <StyledLink to="/">
                        Download
                    </StyledLink>
                </StyledLi>
            </StyledMenuUl>
            <SearchForm />
        </StyledFlex>
    )
}
export default Drawer