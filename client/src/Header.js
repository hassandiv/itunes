import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #000000;
    z-index: 999;
`;
const StyledUl = styled.ul`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;
const StyledLi = styled.li`
    list-style: none;
    transition: 0.5s all;
    padding: 11px 10px;
    margin: 0px 2px;
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
    font-weight: 400;
    line-height: 1.5;
`;
const StyledIcon = styled.img`
    display: block;
    width: 70px;
    height: 100%;
    @media (max-width: 768px) {
        margin-left: auto;
        padding-right: 15px;
    }
`;

const Header = () => {

    return (
        <StyledNav>
            <StyledIcon alt="logo" src="/wave.svg" />
            <StyledUl>
                <StyledLi>
                    <StyledLink to="/">
                        Premium
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/">
                        Support
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to="/">
                        Download
                    </StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
export default Header