import React from 'react';
import { testimonials } from '../constants';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-stone-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Our Community Says</h2>
          <p className="text-lg text-stone-300 mt-2">Real stories from our students and parents.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-stone-900/50 p-8 rounded-xl shadow-lg">
              <p className="text-stone-100 italic leading-relaxed mb-6">
                “{testimonial.quote}”
              </p>
              <p className="font-bold text-white text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;