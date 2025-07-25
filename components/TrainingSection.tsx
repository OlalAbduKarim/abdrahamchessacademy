import React from 'react';
import { trainingPrograms } from '../constants';

const TrainingCard = ({ name, price, description, imageUrl, onJoin }: { name: string, price: string, description: string, imageUrl: string, onJoin: (name: string) => void }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={`Image for ${name} chess package`} />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-stone-900 mb-2">{name}</h3>
      <p className="text-2xl font-semibold text-stone-800 mb-3">{price}</p>
      <p className="text-stone-600 mb-6 flex-grow">{description}</p>
      <button onClick={() => onJoin(name)} className="mt-auto text-center w-full bg-stone-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-stone-700 transition-colors shadow-sm">
        Join Now
      </button>
    </div>
  </div>
);

const TrainingSection = ({ onJoin }: { onJoin: (name: string) => void }) => {
  return (
    <section id="training" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Our Training Programs</h2>
          <p className="text-lg text-stone-600 mt-2">Find the perfect path to chess mastery.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((program) => (
            <TrainingCard
              key={program.name}
              name={program.name}
              price={program.price}
              description={program.description}
              imageUrl={program.imageUrl}
              onJoin={onJoin}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;