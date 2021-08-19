import React from 'react'
import Corpo from './components/corpo/Corpo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './App.css'

export default ()=> {

   return(
      <div className="container">
          <h1>RESOLUÇÃO DO EXERCÍCIO DE CSS COM REACT</h1>
          <Header/>
          <Corpo/>
          <Footer/>
      </div>
)}