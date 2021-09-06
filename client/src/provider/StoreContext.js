import { useState, createContext } from 'react'
export const StoreContext = createContext()    
    
export const StoreProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [term, setTerm] = useState('')
    const [entity, setEntity] = useState('')
    const [status, setStatus] = useState({
        error: null,
        code: null
    })
    const [music, setMusic] = useState({
        song: false,
        musicArtist: false,
        album: false,
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
                term,
                setTerm,
                entity,
                setEntity,
                status,
                setStatus,
                music,
                setMusic
            }}>
            {children}
        </StoreContext.Provider>
    )
}