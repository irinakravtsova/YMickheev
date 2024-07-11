import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/main/HeroSection/HeroSection'


function App() {


  return (
   <div className='body-fone'>
    < Header />
    <main>
     < HeroSection />
    </main>
   
   </div>
  )
}

export default App
