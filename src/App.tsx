import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SakuraEffect from './components/SakuraEffect'
import Hitodama from './components/Hitodama'
import LoadingScreen from './components/LoadingScreen'

// Pages
import Home from './pages/Home'

function App() {
  const [world, setWorld] = useState<'heikai' | 'wakai' | 'hankai'>('heikai')

  useEffect(() => {
    const interval = setInterval(() => {
      setWorld(prev => {
        const worlds = ['heikai', 'wakai', 'hankai'] as const
        const currentIndex = worlds.indexOf(prev)
        return worlds[(currentIndex + 1) % worlds.length]
      })
    }, 10000)

    const createSlash = (e: MouseEvent) => {
      const slash = document.createElement('div')
      slash.className = 'katana-slash'
      slash.style.left = `${e.clientX}px`
      slash.style.top = `${e.clientY}px`
      slash.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`
      document.body.appendChild(slash)

      setTimeout(() => slash.remove(), 600)
    }

    window.addEventListener('mousedown', createSlash)

    return () => {
      clearInterval(interval)
      window.removeEventListener('mousedown', createSlash)
    }
  }, [])

  return (
    <Router>
      <div className={`App world-${world}`}>
        <LoadingScreen />

        {/* World Overlays */}
        <div className="world-overlay heikai-overlay" />
        <div className="world-overlay wakai-overlay" />
        <div className="world-overlay hankai-overlay" />

        {/* Global Japan Texture Overlay */}
        <div className="matsuri-overlay" />

        <SakuraEffect world={world} />
        <Hitodama world={world} />

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home world={world} />} />
            <Route path="*" element={<Home world={world} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App