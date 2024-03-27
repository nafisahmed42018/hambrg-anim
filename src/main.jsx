import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Opportunities from './pages/Opportunities.jsx'
import Solutions from './pages/Solutions.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/contact" element={<Contact />} />
    </Route>,
  ),
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
