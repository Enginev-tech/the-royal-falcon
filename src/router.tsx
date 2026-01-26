import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './ui/RootLayout'
import { HomePage } from './ui/pages/HomePage'
import { EtenPage } from './ui/pages/EtenPage'
import { DrinkenPage } from './ui/pages/DrinkenPage'
import { EntertainmentPage } from './ui/pages/EntertainmentPage'
import { EventsPage } from './ui/pages/EventsPage'
import { OverOnsPage } from './ui/pages/OverOnsPage'
import { ContactPage } from './ui/pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'eten', element: <EtenPage /> },
      { path: 'drinken', element: <DrinkenPage /> },
      { path: 'entertainment', element: <EntertainmentPage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'over-ons', element: <OverOnsPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
