import styled from 'styled-components'

const StyledNav = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #000000;
    //position: fixed;
    z-index: 999;
`;
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
`;
const StyledUl = styled.ul`
    width: 250px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const StyledLi = styled.li`
    list-style: none;
`;
const StyledLink = styled.a`
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
`;
const StyledIcon = styled.img`
    display: block;
    width: 70px;
    height: 100%;
    // margin: 0 auto;
`;

const Header = () => {

    return (
        <StyledNav>
            {/* <StyledH1>Nextify</StyledH1> */}
            <StyledIcon alt="logo" src="/wave.svg" />
            <StyledUl>
                <StyledLi>
                    <StyledLink href="#">Premium</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="#">Support</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="#">Download</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
export default Header