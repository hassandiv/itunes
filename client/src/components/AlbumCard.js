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
    @media (max-width: 330px) {
        width: 275px;
    }
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
const StyledSmall = styled.small`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.00938em;
    margin: 0px 0px 10px 0px;
    position: absolute;
    bottom: 120px;
    left: 15px;
`;
const StyledLink = styled.a`
    text-decoration: none;
`;
const StyledImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 60%;
    object-fit: cover;
`;

const AlbumCard = ({ artistName, collectionName, artworkUrl100, collectionViewUrl, collectionType }) => {


    return (
        <StyledCard>
            <StyledSmall><i>{collectionType}</i></StyledSmall>
            <StyledLink href={collectionViewUrl} target="_blank"><StyledH1>{collectionName}</StyledH1></StyledLink>
            <StyledH6>{artistName}</StyledH6>
            <StyledLink href={collectionViewUrl} target="_blank"><StyledImg src={artworkUrl100} /></StyledLink>
        </StyledCard>
    )
}
export default AlbumCard