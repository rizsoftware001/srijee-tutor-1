import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { EnrollmentProvider } from './context/EnrollmentContext.jsx'
import { ForeignLanguageProvider } from './context/ForeignLanguageContext.jsx'
import { TrainingCourseProvider } from './context/TrainingCourseContext.jsx'
import { OriginModalProvider } from './context/OriginModalContext.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider defaultTheme="system">
        <ToastProvider>
          <AuthProvider>
            <EnrollmentProvider>
              <ForeignLanguageProvider>
                <TrainingCourseProvider>
                  <OriginModalProvider>
                    <App />
                  </OriginModalProvider>
                </TrainingCourseProvider>
              </ForeignLanguageProvider>
            </EnrollmentProvider>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
