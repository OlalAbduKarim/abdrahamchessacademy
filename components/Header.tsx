import React, { useState, useEffect } from 'react';
import LogoIcon from './icons/LogoIcon';

const Header = ({ page, onNavigateHome, onNavigateRegister }: { page: string, onNavigateHome: () => void, onNavigateRegister: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (page !== 'home') {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={onNavigateHome} className="flex items-center text-stone-800">
            <LogoIcon className="h-10 w-10" />
            <span className="font-bold text-lg ml-3 hidden sm:inline">Abraham Chess Academy</span>
          </button>

          {page === 'home' ? (
            <nav className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={onNavigateRegister}
                className="bg-stone-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-stone-700 transition-colors shadow-sm text-sm sm:text-base whitespace-nowrap"
              >
                Join for Training
              </button>
              <a
                href="#shop"
                onClick={(e) => handleNavClick(e, '#shop')}
                className="bg-white text-stone-800 font-bold py-2 px-4 rounded-lg border-2 border-stone-800 hover:bg-stone-800 hover:text-white transition-colors shadow-sm text-sm sm:text-base"
              >
                Shop
              </a>
              <a 
                href="tel:+256761330687" 
                className="bg-stone-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-stone-700 transition-colors shadow-sm text-sm sm:text-base whitespace-nowrap"
              >
                Contact Us
              </a>
            </nav>
          ) : (
             <button
                onClick={onNavigateHome}
                className="bg-stone-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-stone-700 transition-colors shadow-sm text-sm sm:text-base whitespace-nowrap"
              >
                Back to Home
              </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;