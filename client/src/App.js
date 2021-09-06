import React from 'react'
import { StoreProvider } from './provider/StoreContext'
import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'

const App = () => {

  return (
    <StoreProvider>
      <Header/>
      <Layout/>
      <Footer />
    </StoreProvider>
  )
}

export default App