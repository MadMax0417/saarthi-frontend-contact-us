import { useState } from 'react'
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
   <>
   <nav>
      <Nav />
   </nav>

    <main>
     <Hero />
    </main>

    <div className="mt-2 text-center">
      <Footer />
    </div>
    
   </>
  )
}

export default App
