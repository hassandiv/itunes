import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import { StoreContext } from './provider/StoreContext'
import axios from 'axios'
import styled from 'styled-components'
import { spinner } from './animation/KeyFrames';
import SongCard from './components/SongCard'
import ArtistCard from './components/ArtistCard'
import CollectionCard from './components/CollectionCard'
import Drawer from './Drawer'

const StyledContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    //padding-top: 70px;
`;
const StyledSection = styled.section`
    height: 65vh;
    overflow-y: auto;
    padding: 0px 30px 0px 30px;
    z-index: 9;
    background: #ffffff;
    padding-top: 5vh;
    text-align: center;
    position: relative;
    transition: '0.5s all';
`;
const StyledTitle = styled.span`
    color: #000000;
    font-size: 2rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 900;
    letter-spacing: 0em;
    text-align: center;
`;
// const StyledFlex = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     min-height: 20vh;
// `;
const StyledUl = styled.ul`
    max-width: 100%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px 0px;
    margin: 0 auto;
`;
const StyledCardLi = styled.li`
    list-style: none;
    margin: 10px 0px;
    display: flex;
    align-items: center;
    transition: 1s all;
`;
const StyledLi = styled.li`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    list-style: none;
`;

const StyledMenuIcon = styled.img`
    position: absolute;
    top: 15px;
    left: 15px;
    width: 40px;
    height: auto;
    cursor: pointer;
`;

const StyledHomeIcon = styled.img`
    display: block;
    width: auto;
    height: 500px;
    margin: 0 auto;
    padding: 70px 0px;
`;

const StyledIcon = styled.img`
    display: block;
    width: 50px;
    height: 100%;
    margin: 0 auto;
    animation: ${spinner} 1s ease-in infinite;
`;

const StyledIconNF = styled.img`
    display: block;
    width: 50px;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

const Search = () => {

    const { loading, setLoading, data, setData, page, setPage, limit, setLimit, status, setStatus, term, setTerm, music, setMusic } = useContext(StoreContext)
    const { error, code } = status
    const { song, album, musicArtist } = music
    const [full, setFull] = useState(true)
    const [loadMoreItems, setLoadMoreItems] = useState(false)

    console.log('data', data)
    console.log('page', page)


    const api = () => {
        //const CancelToken = axios.CancelToken
        let cancel
        setLoading(true)
        axios({
            method: 'GET',
            url: `https://itunes.apple.com/search?term=${term}&entity=${song ? 'song' : album ? 'album' : musicArtist ? 'musicArtist' : ''}&limit=200`,
            mode: 'cors',
            cancelToken: new axios.CancelToken(c => cancel = c),
            // cancelToken: new CancelToken(function executor(c) {
            //     // An executor function receives a cancel function as a parameter
            //     cancel = c;
            // }),
            page
        })
        .then(res => {
            if (res.status < 300) {
                setData(res.data.results)
                //const newData = res.data.results
                //setData(prev => [...prev, ...newData])
                setLoading(false)
                setStatus({
                    ...status,
                    error: false,
                    code: res.status,
                })
            }
            //console.log('res 2', res)
        })
        .catch(err => {
            if (err.response && err.response.status > 300) {
                setLoading(false)
                setStatus({
                    ...status,
                    error: true,
                    code: err.response.status,
                })
            }
            if (axios.isCancel(err)) return
        })
        //console.log('cancelToken', CancelToken)
        return () => cancel()
    }

    const sliceData = data.slice(0, limit)

    const loadMore = e => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
        // console.log('scrollTop', scrollTop)
        // console.log('clientHeight', clientHeight)
        // console.log('scrollHeight', scrollHeight)
        if (scrollHeight - scrollTop === clientHeight) {
            setPage(page + 1)
            setLimit(limit + 10)
            setLoadMoreItems(true)
        }
        else {
            setLoadMoreItems(false)
        }
        if (sliceData.length === data.length) {
            setPage(page)
            setLimit(limit)
            setLoadMoreItems(false)
        }
    }

    useEffect(() => {
        setData([])
        setPage(1)
        setLimit(10)
        setStatus({
            error: null,
            code: null
        })
        api()
    }, [term, song, album, musicArtist])

    

    return (
        <StyledContainer>
            <StyledMenuIcon onClick={() => setFull(!full)} alt="menu icon" src="/menu.svg" />
            <div style={full ? { width: '0px', transition: '0.5s all' } : { width: '350px', transition: '0.5s all' }}>
                <Drawer />
            </div>
            <StyledSection
                onScroll={loadMore}
                style={full ? { width: '100%', transition: '0.5s all' } : { width: '80%', transition: '0.5s all' }}
            >
                {   term === '' && data.length === 0 ?
                    <StyledHomeIcon alt="sound" src="/equalizer.svg" />
                    :
                    <>
                        <StyledTitle>
                            { song && data.length !== 0 ?
                                'Songs'
                            : musicArtist && data.length !== 0 ?
                                'Artists'
                            : album && data.length !== 0 ?
                                'Albums'
                            :
                                null
                            }
                        </StyledTitle>
                        <StyledUl style={full ? { width: '1400px', transition: '0.5s all' } : { width: '900px', transition: '0.5s all' }}>
                            {   loading  ?
                                <StyledIcon alt="loading" src="/cd.svg" /> 
                            : code > 300 ?
                                <StyledLi><b>{code}</b>. That's an error.<br></br>The server encountered a temporary error and could not complete your request. Please try again in 30 seconds.</StyledLi>
                            : code < 300 && data.length === 0 && term !== '' ?
                                <>
                                    <StyledIconNF alt="sound" src="/search.svg" />
                                    <StyledLi>Sorry we couldn't find any matches for <b>{term}</b>, please try different keyword.</StyledLi>
                                </>
                            :
                            <>
                                {data && sliceData.map((item, index) => (
                                    <StyledCardLi style={full ? { flex: '0 0 33.333333%' } : { flex: '50%' }}>
                                        {   song ?
                                            <SongCard
                                                key={index}
                                                artistName={item.artistName}
                                                trackViewUrl={item.trackViewUrl}
                                                trackName={item.trackName}
                                                trackTimeMillis={item.trackTimeMillis}
                                                artworkUrl100={item.artworkUrl100}
                                                previewUrl={item.previewUrl}
                                            />
                                        : musicArtist ?
                                            <ArtistCard
                                                key={index}
                                                artistLinkUrl={item.artistLinkUrl}
                                                artistName={item.artistName}
                                                artistType={item.artistType}
                                            />
                                        : album ?
                                            <CollectionCard
                                                key={index}
                                                artistName={item.artistName}
                                                artworkUrl100={item.artworkUrl100}
                                                collectionViewUrl={item.collectionViewUrl}
                                                collectionName={item.collectionName}
                                                collectionType={item.collectionType}
                                            />
                                        :
                                            null
                                        }
                                    </StyledCardLi>
                                ))}
                            </>
                            }
                            <p>{loadMoreItems ? 'loading...' : ''}</p>
                        </StyledUl>
                    </>
                }
            </StyledSection>
        </StyledContainer>
    );
}
export default Search