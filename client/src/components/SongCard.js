import styled from 'styled-components';

const StyledCard = styled.div`
    width: 445px;
    max-width: 100%;
    height: 150px;
    background-color: #232323;
    border-radius: 5px;
    padding: 15px;
    margin: 10px;
    position: relative;
    text-align: left;
    overflow: hidden;
    box-shadow:
    0 5px 10px rgba(154,160,185,0.7),
    0 15px 40px rgba(166,173,201,0.7);
    @media (max-width: 768px) { //ipad
        width: 500px;
    }
    @media (max-width: 550px) { //iphone 6,7,8, x, max
        width: 330px;
    }
    @media (max-width: 330px) { //phone 5SE
        width: 270px;
    }
`;
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.5;
    width: 240px;
`;
const StyledH6 = styled.h6`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0.00938em;
    width: 240px;
    @media (max-width: 330px) {
        width: 180px;
    }
`;
const StyledSmall = styled.small`
    color: #fff;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
    position: absolute;
    top: 15px;
    right: 170px;
    z-index: 10;
    @media (max-width: 330px) {
        top: 18px;
        right: 111px;
    }
`;
const StyledAudio = styled.audio`
    width: 280px;
    position: absolute;
    bottom: 15px;
    left: 15px;
    @media (max-width: 768px) {
        width: 330px;
    }
    @media (max-width: 550px) {
        width: 180px;
        left: 10px;
    }
`;
const StyledLink = styled.a`
    text-decoration: none;
`;
const StyledImg = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 160px;
    height: 100%;
    object-fit: cover;
    @media (max-width: 330px) {
        width: 100px;
    }
`;

const SongCard = ({ artistName, trackName, artworkUrl100, previewUrl, trackViewUrl, trackTimeMillis }) => {

  const ms = trackTimeMillis ? trackTimeMillis : null
    const d = new Date(1000 * Math.round(ms / 1000)); // round to nearest second
    function pad(i) { return ('0' + i).slice(-2); }
    const str = pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());

    return (
        <StyledCard>
            <StyledLink href={trackViewUrl} target="_blank">
                <StyledH1>
                    {trackName}
                </StyledH1>
            </StyledLink>
            <StyledH6>{artistName}</StyledH6>
            <StyledAudio controls>
                <source src={previewUrl} type="audio/x-m4a" />
            </StyledAudio>
            <StyledSmall>{str}</StyledSmall>
            <StyledImg src={artworkUrl100} />
        </StyledCard>
    )
}
export default SongCard