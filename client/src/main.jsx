import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { LanguageProvider } from './context/LanguageContext'
import { ErrorBoundary } from './components/ErrorBoundary'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LanguageProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#ffffff',
              border: '1px solid #e63946',
              borderRadius: '12px',
              padding: '16px',
              fontFamily: 'Inter, sans-serif'
            },
            success: {
              iconTheme: {
                primary: '#e63946',
                secondary: '#ffffff'
              }
            },
            error: {
              iconTheme: {
                primary: '#e63946',
                secondary: '#ffffff'
              }
            }
          }}
        />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)