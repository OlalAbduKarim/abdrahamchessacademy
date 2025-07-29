import React from 'react';
import { navLinks } from '../constants';
import LogoIcon from './icons/LogoIcon';

const Footer = ({ page, onNavigateHome }: { page: string, onNavigateHome: () => void }) => {
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (page !== 'home') {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {page === 'home' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div className="md:col-span-1">
              <button onClick={onNavigateHome}>
                <LogoIcon className="h-12 w-12 mb-4" />
              </button>
              <p className="text-stone-400">
                Shaping strategic minds in Uganda through the timeless game of chess.
              </p>
            </div>
            {/* Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={`footer-${link.name}`}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-stone-300 hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-stone-300">
                <li>Phone: +256 761 330 687</li>
                <li>Email: AbrahamAcademy4Chess@gmail.com</li>
                <li>Location: Kampala, Uganda</li>
              </ul>
            </div>
          </div>
        )}
        <div className="mt-12 border-t border-stone-700 pt-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Abraham Chess Academy. All Rights Reserved.</p>
        </div>
      </div>

      {/* Hidden SEO Keywords */}
      <div className="absolute w-0 h-0 overflow-hidden">
        <p>Chess training in Uganda</p>
        <p>Kampala chess academy</p>
        <p>Buy chess boards Uganda</p>
        <p>Chess lessons for kids in Kampala</p>
        <p>Professional chess coaching Uganda</p>
        <p>Abraham Chess Academy Uganda</p>
      </div>
    </footer>
  );
};

export default Footer;