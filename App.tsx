import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TrainingSection from './components/TrainingSection';
import ShopSection from './components/ShopSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RegistrationPage from './components/RegistrationPage';

function App() {
  const [page, setPage] = useState('home');
  const [selectedProgram, setSelectedProgram] = useState('');

  const navigateToRegister = (program = '') => {
    setSelectedProgram(program);
    setPage('register');
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const navigateToHome = () => {
    setPage('home');
    setSelectedProgram('');
  };

  return (
    <div className="bg-white text-stone-700 antialiased">
      <Header page={page} onNavigateHome={navigateToHome} onNavigateRegister={() => navigateToRegister()} />
      <main>
        {page === 'home' ? (
          <>
            <HeroSection onEnroll={() => navigateToRegister()} />
            <AboutSection />
            <TrainingSection onJoin={(program) => navigateToRegister(program)} />
            <ShopSection />
            <TestimonialsSection />
            <ContactSection />
          </>
        ) : (
          <RegistrationPage 
            onNavigateHome={navigateToHome} 
            selectedProgram={selectedProgram} 
          />
        )}
      </main>
      <Footer page={page} onNavigateHome={navigateToHome} />
    </div>
  );
}

export default App;