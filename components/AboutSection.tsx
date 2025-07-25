import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Our Mission: Shaping Minds, One Move at a Time
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              At Abraham Chess Academy, our mission is to make the intellectual sport of chess accessible to everyone in Uganda. We believe chess is more than just a game; it's a powerful tool for developing critical thinking, foresight, patience, and resilience. 
            </p>
            <p className="text-stone-600 leading-relaxed">
              We are dedicated to fostering a vibrant community of learners and thinkers, from young children picking up their first piece to seasoned players aiming for mastery. Our tailored programs ensure that every student receives the guidance they need to grow, compete, and succeed, both on and off the chessboard.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/images/mission.jpg" 
              alt="A focused chess training session at Abraham Chess Academy in Uganda" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
