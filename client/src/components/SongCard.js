import styled from 'styled-components';

const StyledCard = styled.div`
    width: 400px;
    height: 150px;
    background-color: #232323;
    border-radius: 5px;
    padding: 10px;
    position: relative;
    text-align: left;
    margin: 0 auto;
    overflow: hidden;
    box-shadow:
    0 5px 10px rgba(154,160,185,0.7),
    0 15px 40px rgba(166,173,201,0.7);
`;
const StyledH1 = styled.h1`
    color: #fff;
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    margin: 0px;
    width: 240px;
`;
const StyledH6 = styled.h6`
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.00938em;
    margin: 0px;
    width: 240px;
`;
const StyledSmall = styled.small`
    color: #fff;
    font-size: 0.8rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 600;
    letter-spacing: 0.00938em;
    position: absolute;
    top: 15px;
    right: 170px;
    z-index: 10;
`;
const StyledRow = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    position: absolute;
    bottom: 25px;
    left: 5px;
`;
const StyledPPIcon = styled.img`
    display: block;
    width: 25px;
    height: 100%;
    cursor: pointer;
`;
const StyledIcon = styled.img`
    display: block;
    width: 15px;
    height: 100%;
    cursor: pointer;
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
`;
// const StyledAudio = styled.audio`
//     z-index: 9;
//     // visibility: hidden;
//     // position: absolute;
// `;

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
            <StyledSmall>{str}</StyledSmall>
            <StyledH6>{artistName}</StyledH6>
            <StyledImg src={artworkUrl100} />
            <StyledRow>
            {/* <StyledIcon alt="previous" src="/previous.svg" />
            <StyledPPIcon
                alt="play"
                onClick={() => setState(prevState => !prevState)}
                src={state ? "/play-button-arrowhead.svg" : "/pause.svg"}
                type="audio/mpeg"
            />
            <StyledIcon alt="next" src="/next.svg" /> */}
            <audio controls>
                <source src={previewUrl} type="audio/x-m4a" />
            </audio>
            </StyledRow>
        </StyledCard>
        )
}
export default SongCard