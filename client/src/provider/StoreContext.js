import { useState, createContext } from 'react'
export const StoreContext = createContext()    
    
export const StoreProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [term, setTerm] = useState('')
    const [status, setStatus] = useState({
        error: null,
        code: null
    })

    const [music, setMusic] = useState({
        song: false,
        album: false,
        musicArtist: false,
    })

    return (
        <StoreContext.Provider
            value={{
                loading,
                setLoading,
                data,
                setData,
                page,
                setPage,
                limit,
                setLimit,
                status,
                setStatus,
                term,
                setTerm,
                music,
                setMusic
            }}>
            {children}
        </StoreContext.Provider>
    )
}