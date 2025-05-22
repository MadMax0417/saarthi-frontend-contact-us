import { useState, useEffect } from 'react'
import Hero from './components/Hero.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import {Toaster} from "react-hot-toast"

function App() {    
    const [toastPosition, setToastPosition] = useState("top-center");

  useEffect(() => {
    const updatePosition = () => {
      const isMobile = window.innerWidth <= 768;
      setToastPosition(isMobile ? "bottom-center" : "top-center");
    };

    updatePosition(); // initial check
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);
  return (
   <>
   <nav>
      <Nav />
   </nav>

    <main>
     <Hero />
    </main>
    
    <Toaster 
      position={toastPosition}
      reverseOrder={false} 
    />

    <div className="mt-2 text-center">
      <Footer />
    </div>
   </>
  )
}

export default App
