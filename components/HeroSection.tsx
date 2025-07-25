import React from 'react';

const HeroSection = ({ onEnroll }: { onEnroll: () => void }) => {
  return (
    <section id="home" className="bg-stone-50 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-900 leading-tight mb-4">
          Train Your Mind with Abraham Chess Academy
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto mb-8">
          Inspiring strategic thinking and champion mindsets across Uganda.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onEnroll} className="w-full sm:w-auto bg-stone-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-stone-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Enroll Now
          </button>
          <a href="https://wa.me/256761330687" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-stone-800 font-bold py-3 px-8 rounded-lg border-2 border-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;