
import React from 'react'
import NavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'

import './App.css'


function App() {
 

  return (
    <>
    <nav>
<NavBar />
    </nav>
    

      {/* Main content */}
      <div className="content">
        <h2>Welcome to the Ticket System</h2>
        <p>This is where your main app content will go.</p>
      </div>
      <footer><Footer /></footer>
    
     
    </>
  )
}

export default App
