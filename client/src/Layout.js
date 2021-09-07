import React, { useState, useEffect, useContext } from 'react'
import { StoreContext } from './provider/StoreContext'
import axios from 'axios'
import styled from 'styled-components'
import { spinner, fadeIn } from './animation/KeyFrames'
import SongCard from './components/SongCard'
import ArtistCard from './components/ArtistCard'
import AlbumCard from './components/AlbumCard'
import Drawer from './Drawer'

const StyledContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;
const StyledDrawer = styled.aside`
    height: 100vh;
    width: ${props => props.width};
    transition: 0.5s all;
    background-color: #101010;
    @media (max-width: 550px) {
        min-width: ${props => props.minWidth};
    }
`;
const StyledSection = styled.section`
    width: 100%;
    margin: 0 auto; 
    height: 95vh;
    overflow-y: scroll;
    padding: 0px 20px;
    z-index: 9;
    background: #ffffff;
    text-align: center;
    position: relative;
    padding-top: 5vh;
    @media (max-width: 768px) {
        padding: 0px;
        padding-top: 30px;
    }
`;
const StyledTitle = styled.span`
    color: #000000;
    font-size: 2rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
`;
const StyledUl = styled.ul`
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 auto;
    width: 990px;
    max-width: 100%;
    padding: 0px;
    padding-top: 30px;
    @media (max-width: 768px) {
        justify-content: center;
        padding-top: 30px;
    }
`;
const StyledCardLi = styled.li`
    list-style: none;
    animation-name: ${fadeIn};
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.6s;
`;
const StyledLi = styled.li`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    list-style: none;
    width: 600px;
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
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media (max-width: 550px) {
        height: 300px;
    }
`;
const StyledIcon = styled.img`
    display: block;
    width: 50px;
    height: auto;
    margin: 0 auto;
    animation: ${spinner} 1s ease-in infinite;
`;
const StyledIconNF = styled.img`
    display: block;
    width: 50px;
    height: auto;
    margin: 0 auto;
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;
const StyledLoadMore= styled.p`
    font-size: 1.3rem;
    line-height: 1.2;
    padding: 40px 0px;
`;

const Layout = () => {

    const { loading, setLoading, data, setData, page, setPage, limit, setLimit, status, setStatus, term, music, entity } = useContext(StoreContext)
    const { code } = status
    const { song, album, musicArtist } = music
    const [full, setFull] = useState(false)
    const [loadMoreItems, setLoadMoreItems] = useState(false)

    useEffect(() => {
        let cancel
        if (term !== '' && entity !== '') {
            setLoading(true)
            axios({
                method: 'GET',
                url: `https://itunes.apple.com/search?term=${term}&entity=${entity}&limit=200`,
                mode: 'cors',
                cancelToken: new axios.CancelToken(c => cancel = c),
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
                    console.log("Results for " + term + ": ", res.data)
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
            return () => cancel()
        }
        
    }, [term, entity])

    const sliceData = data.slice(0, limit)

    const loadMore = e => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
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
        if (term === '' || entity !== '') {
            setData([])
            setPage(1)
            setLimit(10)
            setStatus({
                error: null,
                code: null
            })
        }
    }, [term, entity])
    
    return (
        <StyledContainer>
            <StyledMenuIcon
                data-cy="menu-btn"
                onClick={() => setFull(!full)}
                alt="menu icon"
                src="/menu.svg"
            />
            <StyledDrawer
                width={full ? '350px' : '0px'}
                minWidth={full ? '100%' : '0px'}
            >
                <Drawer />
            </StyledDrawer>
            <StyledSection
                data-cy="infinite-scroll-list"
                onScroll={loadMore}
            >
                {   term === '' && data.length === 0 ?
                    <StyledHomeIcon alt="equalizer background" src="/equalizer.svg" />
                    :
                    <>
                        <StyledTitle>
                            {   song && data.length !== 0 ?
                                'Songs'
                            :   musicArtist && data.length !== 0 ?
                                'Artists'
                            :   album && data.length !== 0 ?
                                'Albums'
                            :
                                null
                            }
                        </StyledTitle>
                        <StyledUl>
                            {   loading  ?
                                <StyledIcon alt="loading" src="/cd.svg" /> 
                            :   code > 300 ?
                                <StyledLi><b>{code}</b>. That's an error.<br></br>The server encountered a temporary error and could not complete your request. Please try again in 30 seconds.</StyledLi>
                            :   code < 300 && data.length === 0 && term !== '' ?
                                <>
                                    <StyledIconNF alt="sound" src="/search.svg" />
                                    <StyledLi>Sorry we couldn't find any matches for <b>{term}</b>, please try different keyword.</StyledLi>
                                </>
                            :
                            <>
                                {data && sliceData.map((item, index) => (
                                    <StyledCardLi>
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
                                        :   musicArtist ?
                                            <ArtistCard
                                                key={index}
                                                artistLinkUrl={item.artistLinkUrl}
                                                artistName={item.artistName}
                                                artistType={item.artistType}
                                            />
                                        :   album ?
                                            <AlbumCard
                                                //key={index}
                                                key={item.collectionId}
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
                        </StyledUl>
                        <StyledLoadMore>
                            {   loadMoreItems && sliceData.length !== data.length ?
                                'loading...'
                            :   !loadMoreItems && sliceData.length === data.length && !loading ?
                                'no more items found'
                            :
                                ''
                            }
                        </StyledLoadMore>
                    </>
                }
            </StyledSection>
        </StyledContainer>
    )
}
export default Layout