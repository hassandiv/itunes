import styled from 'styled-components';

const StyledCard = styled.div`
    width: 310px;
    height: 350px;
    background-color: #232323;
    border-radius: 5px;
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
const StyledFlex = styled.div`
    height: 110px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
`;
const StyledSmall = styled.small`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.00938em;
`;
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
`;
const StyledH6 = styled.h6`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.00938em;
`;
const StyledLink = styled.a`
    text-decoration: none;
`;
const StyledImg = styled.img`
    display: block;
    width: 100%;
    height: 60%;
    object-fit: cover;
`;

const AlbumCard = ({ artistName, collectionName, artworkUrl100, collectionViewUrl, collectionType }) => {

    return (
        <StyledCard>
            <StyledLink href={collectionViewUrl} target="_blank"><StyledImg src={artworkUrl100} /></StyledLink>
            <StyledFlex>
                <StyledH6>{artistName}</StyledH6>
                <StyledLink href={collectionViewUrl} target="_blank"><StyledH1>{collectionName}</StyledH1></StyledLink>
                <StyledSmall>{collectionType}</StyledSmall>
            </StyledFlex>
        </StyledCard>
    )
}
export default AlbumCard