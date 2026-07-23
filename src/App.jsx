import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import InstagramFloat from './components/InstagramFloat'
import MobileCTABar from './components/MobileCTABar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Placements from './pages/Placements'
import Contact from './pages/Contact'
import SplashScreen from './components/SplashScreen'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Fallback timeout in case onComplete is delayed
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div style={{ display: showSplash ? 'none' : 'block' }}>
        <Router>
          <ScrollToTop />
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppFloat />
            <InstagramFloat />
            <MobileCTABar />
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
