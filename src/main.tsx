import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css' // Tailwind imports
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <div className="h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                About Page
              </h1>
              <Link
                to="/"
                className="text-orange-500 dark:text-orange-400 underline"
              >
                Go Back Home
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
