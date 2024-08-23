
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer'
import './App.css'




 function App () {
  return (
    <div className="main_container">
    <Navbar/>
    <Sidebar/>
    <Main/>
    <Footer/>       
  </div>
  ) 
}

export default App


  