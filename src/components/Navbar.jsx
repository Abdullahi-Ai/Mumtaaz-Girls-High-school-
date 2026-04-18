import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      const isMobile = window.innerWidth < 768;

      if (isMobile && currentScrollY > lastScrollY && currentScrollY > 40) {
        setIsVisible(false);
        if (isOpen) {
          setIsOpen(false);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Academics', path: '/academics' },
    { name: 'Islamic Life', path: '/islamic-life' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Blog', path: '/blog' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-2xl py-3 shadow-2xl border-b border-white/5'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <img src={logo} alt="Mumtaaz Logo" className="relative h-14 w-auto md:h-16 transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tighter leading-none ${
                isScrolled || location.pathname !== '/' ? 'text-white' : 'text-primary'
              }`}>
                Mumtaaz
              </span>
              <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black ${
                isScrolled ? 'text-secondary' : location.pathname !== '/' ? 'text-secondary' : 'text-primary/70'
              }`}>
                Girls High School
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-secondary'
                    : (isScrolled || location.pathname !== '/') 
                      ? 'text-white hover:text-secondary' 
                      : 'text-primary hover:text-secondary'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary"
                  />
                )}
              </Link>
            ))}
            <button 
              onClick={openModal}
              className="btn-primary py-2 px-6"
            >
              Apply Now
            </button>
          </div>

          <button
            className={`md:hidden p-2 rounded-2xl transition-all duration-300 ${
              isScrolled || location.pathname !== '/' ? 'text-white bg-white/10' : 'text-primary bg-primary/5'
            }`}
            onClick={toggleMenu}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm z-[60] md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-primary-dark z-[70] md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.5)] border-l border-white/5 flex flex-col"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center">
                 <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold text-white tracking-tighter">Navigation</span>
                    <span className="text-[9px] text-secondary uppercase tracking-[0.2em] font-bold">Mumtaaz Girls</span>
                 </div>
                 <button 
                  onClick={toggleMenu}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6 custom-scrollbar">
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={toggleMenu}
                      className={`block text-xl font-serif font-bold transition-all duration-300 ${
                        location.pathname === link.path 
                          ? 'text-secondary translate-x-3' 
                          : 'text-white/60 hover:text-white hover:translate-x-2'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                         {location.pathname === link.path && <div className="w-2 h-2 bg-secondary rounded-full" />}
                         <span>{link.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary/20 border-t border-white/5">
                <button
                  onClick={() => {
                    toggleMenu();
                    openModal();
                  }}
                  className="w-full btn-primary py-4 flex items-center justify-center space-x-3 group"
                >
                  <span className="text-base">Apply Now</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <p className="text-center text-white/30 text-[10px] mt-6 tracking-widest uppercase font-bold">
                  Est. 2008 • Nakuru, Kenya
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
