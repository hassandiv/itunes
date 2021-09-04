import React from 'react'
import { StoreProvider } from './provider/StoreContext'
import Search from './Search'
import Header from './Header'
import Footer from './Footer'

const App = () => {

  return (
    <StoreProvider>
      <Header/>
      <Search/>
      <Footer />
    </StoreProvider>
  )
}

export default App