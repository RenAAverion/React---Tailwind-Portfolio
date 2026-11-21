import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
const ProjectsPage = lazy(() => import('./Pages/ProjectsPage.jsx'))
import ScrollToTop from './components/shared/ScrollToTop.jsx'
import Seo from './components/shared/Seo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Seo />
      <ScrollToTop/>
      <Suspense fallback={<p role="status" className="site-container pt-36">Loading projects…</p>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
