import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import AppRoutes from './routes.jsx'

// Scroll to top on route change (matches multi-page site behaviour).
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
