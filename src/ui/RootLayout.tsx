import { useEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroVideo } from './components/HeroVideo'

export function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const targetId = decodeURIComponent(location.hash.replace('#', ''))
    const targetEl = document.getElementById(targetId)

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const timeout = window.setTimeout(() => {
      const retryEl = document.getElementById(targetId)
      if (retryEl) {
        retryEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)

    return () => window.clearTimeout(timeout)
  }, [location])

  return (
    <div>
      <Navbar />
      <HeroVideo />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
