import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroVideo } from './components/HeroVideo'

export function RootLayout() {
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
