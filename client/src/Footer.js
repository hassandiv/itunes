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
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding-left: 30px;
    @media (max-width: 550px) {
        font-size: 0.8rem;
        line-height: 1.3;
    }
`;
const StyledH5 = styled.h5`
    color: #fff;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.3;
    padding-right: 30px;
    @media (max-width: 550px) {
        font-size: 0.64rem;
        line-height: 1.2;
    }
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