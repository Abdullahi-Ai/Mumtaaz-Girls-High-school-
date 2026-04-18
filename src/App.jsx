import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Academics from './pages/Academics';
import IslamicLife from './pages/IslamicLife';
import Admissions from './pages/Admissions';
import Blog from './pages/Blog';
import { useEffect } from 'react';
import { ModalProvider } from './context/ModalContext';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="academics" element={<Academics />} />
            <Route path="islamic-life" element={<IslamicLife />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
