import React from 'react'
import Corpo from './components/corpo/Corpo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './App.css'

const App =  ()=> {

   return(
      <div className="container">
          <h1>RESOLUÇÃO DO EXERCÍCIO DE CSS COM REACT</h1>
          <Header/>
          <Corpo/>
          <Footer/>
      </div>
)}

export default App