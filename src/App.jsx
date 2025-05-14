import React from 'react'

import "./App.css"
import Header from './Components/Header/Header'

import Footer from './Components/Footer/Footer'
import Requests from './utils/Requests'
import Banner from './Components/Banner/Banner'
// import Banner from './Components/Banner/Banner'

function App() {
  return (
    <div className='apps'>
     <Header/>
     <Banner/>
    
     <Footer/>
    </div>
  )
}

export default App
