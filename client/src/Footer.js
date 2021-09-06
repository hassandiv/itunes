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
    font-size: 1.1rem;
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

const Footer = () => {

    return (
        <StyledFooter>
            <StyledH1>iTunes Search API</StyledH1>
            <StyledH5>All rights reserved. 2021</StyledH5>
        </StyledFooter>
    )
}
export default Footer