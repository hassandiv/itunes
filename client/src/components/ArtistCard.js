import styled from 'styled-components';

const StyledCard = styled.div`
    width: 300px;
    height: 400px;
    background-color: #232323;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    text-align: left;
    margin: 10px;
    overflow: hidden;
    box-shadow:
    0 5px 10px rgba(154,160,185,0.7),
    0 15px 40px rgba(166,173,201,0.7);
`;
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 1.3rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 600;
    line-height: 1.334;
    letter-spacing: 0em;
    margin: 0px;
    position: absolute;
    bottom: 75px;
    left: 15px;
`;
const StyledH6 = styled.h6`
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.00938em;
    margin: 0px;
    position: absolute;
    bottom: 40px;
    left: 15px;
`;
const StyledLink = styled.a`
    text-decoration: none;
`;
const StyledImg = styled.img`
    position: absolute;
    top: 15px;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: block;
    width: auto;
    height: 65%;
    object-fit: cover;
`;

const ArtistCard = ({ artistName, artistLinkUrl, artistType }) => {

    return (
        <StyledCard>
            <StyledLink href={artistLinkUrl} target="_blank"><StyledH1>{artistName}</StyledH1></StyledLink>
            <StyledH6>{artistType}</StyledH6>
            <StyledLink href={artistLinkUrl} target="_blank"><StyledImg alt={artistName} src="/user.svg" /></StyledLink>
        </StyledCard>
    )
}
export default ArtistCard