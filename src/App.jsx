import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import ErrorBoundary from './components/common/ErrorBoundary';
import ScrollToTop from './components/common/ScrollToTop';
import SkipLink from './components/common/SkipLink';

const Home = lazy(() => import('./pages/Home'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));
const MapPage = lazy(() => import('./pages/MapPage'));
const Phototeca = lazy(() => import('./pages/Phototeca'));
const Stories = lazy(() => import('./pages/Stories'));
const Audiovisual = lazy(() => import('./pages/Audiovisual'));
const Participa = lazy(() => import('./pages/Participa'));
const Education = lazy(() => import('./pages/Education'));

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col bg-stone-50">
        <SkipLink />
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/timeline" element={<TimelinePage />} />
                <Route path="/mapa" element={<MapPage />} />
                <Route path="/fototeca" element={<Phototeca />} />
                <Route path="/historias" element={<Stories />} />
                <Route path="/audiovisual" element={<Audiovisual />} />
                <Route path="/participa" element={<Participa />} />
                <Route path="/escuela" element={<Education />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
