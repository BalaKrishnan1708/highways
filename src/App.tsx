import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import PreFooter from './components/PreFooter'
import CustomCursor from './components/CustomCursor'

// Static Page Import (Critical for fast initial paint)
import Home from './pages/Home'

// Lazy Page Imports (Loaded on demand)
const Events = lazy(() => import('./pages/Events'))
const Sponsors = lazy(() => import('./pages/Sponsors'))
const Team = lazy(() => import('./pages/Team'))
const FAQ = lazy(() => import('./pages/FAQ'))
const About = lazy(() => import('./pages/About'))
const Schedule = lazy(() => import('./pages/Schedule'))
const DayEvents = lazy(() => import('./pages/DayEvents'))
const Passes = lazy(() => import('./pages/Passes'))

// Individual Page Loader for Suspense Fallback
const PageLoader = () => (
  <div style={{ 
    height: '60vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#050505',
    color: '#ff4d4d',
    fontSize: '0.8rem',
    fontWeight: 900,
    letterSpacing: '5px',
    textTransform: 'uppercase'
  }}>
    <div className="animate-pulse">Loading Experience...</div>
  </div>
);

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <LoadingScreen />
        <CustomCursor />

        <Navbar />

        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/events/:dayId" element={<DayEvents />} />
              <Route path="/passes" element={<Passes />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <PreFooter />
        <Footer />
      </div>
    </Router>
  )
}

export default App