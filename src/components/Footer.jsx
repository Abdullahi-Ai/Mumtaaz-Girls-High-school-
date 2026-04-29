import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Mumtaaz Logo" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none">Mumtaaz</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-secondary">Girls High School</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              A premier Islamic girls' institution in Nakuru nurturing disciplined, confident, and knowledgeable young Muslim women through academic excellence and spiritual growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-secondary hover:text-primary transition-all rounded-lg"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-secondary hover:text-primary transition-all rounded-lg"><Instagram size={18} /></a>
              <a href="https://wa.me/254112210105" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-[#25D366] hover:text-white transition-all rounded-lg">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary underline decoration-secondary/30 underline-offset-8">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/" className="hover:text-secondary transition-colors block py-1">Home</Link></li>
              <li><Link to="/academics" className="hover:text-secondary transition-colors block py-1">Academics</Link></li>
              <li><Link to="/islamic-life" className="hover:text-secondary transition-colors block py-1">Islamic Life</Link></li>
              <li><Link to="/admissions" className="hover:text-secondary transition-colors block py-1">Admissions</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors block py-1">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary underline decoration-secondary/30 underline-offset-8">Programs</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/academics" className="hover:text-secondary transition-colors block py-1">Junior School</Link></li>
              <li><Link to="/academics" className="hover:text-secondary transition-colors block py-1">Senior School</Link></li>
              <li><Link to="/islamic-life" className="hover:text-secondary transition-colors block py-1">Quran Memorization</Link></li>
              <li><Link to="/islamic-life" className="hover:text-secondary transition-colors block py-1">Tarbiyah Program</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary underline decoration-secondary/30 underline-offset-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>Nakuru, Kenya</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="text-secondary shrink-0" size={18} />
                <a href="tel:+254112210105" className="hover:text-secondary transition-colors">+254 112 210105</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="text-secondary shrink-0" size={18} />
                <a href="mailto:abumudhafffar94@gmail.com" className="hover:text-secondary transition-colors break-all">abumudhafffar94@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <h4 className="font-serif text-lg font-bold mb-6 text-secondary lg:text-right w-full">Digital Access</h4>
            <div className="bg-white p-3 rounded-2xl shadow-xl shadow-secondary/10 border-2 border-secondary/20 group hover:border-secondary transition-colors">
               <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://mumtaaz-girls-high-school.vercel.app/" 
                alt="Website QR Code" 
                className="w-32 h-32 md:w-36 md:h-36"
               />
            </div>
            <p className="mt-4 text-[10px] text-white/40 uppercase tracking-widest font-bold lg:text-right w-full">Scan to Visit Website</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Mumtaaz Girls High School. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
