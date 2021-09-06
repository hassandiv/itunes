import styled from 'styled-components'
import SearchForm from './components/SearchForm';

const StyledAside = styled.aside`
    height: 100vh;
    background-color: #101010;
    z-index: 1;
    padding: 0px 20px;
    overflow: hidden;
`;
const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 320px;
    padding-top: 20px;
    @media (max-width: 768px) {
        height: 420px;
    }
`;
const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    height: 115px;
    width: 300px;
    padding: 0px;
    @media (max-width: 550px) {
        width: 330px;
    }
`;
const StyledMenuUl = styled.ul`
    padding: 0px;
    display: none;
    height: 115px;
    @media (max-width: 768px) {
        width: 300px;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    @media (max-width: 550px) {
        width: 330px;
    }
`;
const StyledLi = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
        border: 2px #fff;
    }
`;
// const StyledMenuLi = styled.li`
//     list-style: none;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     &:hover {
//         border: 2px #fff;
//     }
// `;
const StyledLink = styled.a`
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    letter-spacing: 0em;
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
        <StyledAside>
            <StyledFlex>
                <StyledUl>
                    <StyledLi>
                        <StyledIcon alt="Home" src="/home.svg" />
                        <StyledLink href="#">Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledIcon alt="Your Library" src="/library.svg" />
                        <StyledLink href="#">Your Library</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledIcon alt="nLiked songs" src="/like.svg" />
                        <StyledLink href="#">Liked Songs</StyledLink>
                    </StyledLi>
                </StyledUl>
                <StyledMenuUl>
                    <StyledLi>
                        <StyledIcon alt="Premium" src="/premium-badge.svg" />
                        <StyledLink href="#">Premium</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledIcon alt="Support" src="/help.svg" />
                        <StyledLink href="#">Support</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledIcon alt="Download" src="/cloud-computing.svg" />
                        <StyledLink href="#">Download</StyledLink>
                    </StyledLi>
                </StyledMenuUl>
                <SearchForm />
            </StyledFlex>
        </StyledAside>
    )
}
export default Drawer