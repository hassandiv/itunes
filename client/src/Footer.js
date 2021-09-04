import styled from 'styled-components'

const StyledFooter = styled.footer`
    width: 100%;
    height: 40px;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    z-index: 999;
`;
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    padding-left: 30px;
`;
const StyledH5 = styled.h5`
    color: #fff;
    font-size: 0.8rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    padding-right: 30px;
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

const Footer = () => {

    return (
        <StyledFooter>
            <StyledH1>iTunes</StyledH1>
            <StyledH5>All rights reserved. 2021</StyledH5>
            {/* <StyledUl>
                <StyledLi>
                    <StyledLink href="#">Support</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="#">Support</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="#">Contact us</StyledLink>
                </StyledLi>
            </StyledUl> */}
        </StyledFooter>
    )
}
export default Footer