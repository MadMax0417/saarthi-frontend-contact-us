import { useState } from 'react'
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import {Toaster} from "react-hot-toast"


function App() {
  return (
   <>
   <nav>
      <Nav />
   </nav>

    <main>
     <Hero />
    </main>
    
    <Toaster position="top-center" reverseOrder={false} />

    <div className="mt-2 text-center">
      <Footer />
    </div>
   </>
  )
}

export default App
