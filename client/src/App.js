import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreProvider } from './provider/StoreContext'
import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'

const App = () => {

  return (
    <StoreProvider>
      <Router>
        <Header/>
        <Layout/>
        <Footer />
      </Router>
    </StoreProvider>
  )
}

export default App