
import React from 'react'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Dashboard from './components/dashboard/dashboard'

import './App.css'


function App() {
 

  return (
    <>
    <nav>
<NavBar />
    </nav>
    
    <main><Dashboard /></main>

      <footer><Footer /></footer>
    
     
    </>
  )
}

export default App
