import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from './components/Layout';
import { ModalProvider } from './context/ModalContext';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Academics = lazy(() => import('./pages/Academics'));
const IslamicLife = lazy(() => import('./pages/IslamicLife'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Blog = lazy(() => import('./pages/Blog'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-secondary rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <ModalProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="academics" element={<Academics />} />
              <Route path="islamic-life" element={<IslamicLife />} />
              <Route path="admissions" element={<Admissions />} />
              <Route path="blog" element={<Blog />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ModalProvider>
  );
}

export default App;
