import React from 'react';
import { chessProducts } from '../constants';

const ProductCard = ({ name, price, imageUrl }: { name: string, price: string, imageUrl: string }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300">
    <img className="w-full h-64 object-cover" src={imageUrl} alt={`High-quality ${name} for sale`} />
    <div className="p-6">
      <h3 className="text-xl font-bold text-stone-900 mb-1">{name}</h3>
      <p className="text-lg font-semibold text-stone-800 mb-4">{price}</p>
      <a 
        href="https://wa.me/256761330687" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block w-full bg-white text-stone-800 font-bold py-3 px-6 rounded-lg border-2 border-stone-800 hover:bg-stone-800 hover:text-white transition-colors"
      >
        Order on WhatsApp
      </a>
    </div>
  </div>
);

const ShopSection = () => {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Chess Products for Sale</h2>
          <p className="text-lg text-stone-600 mt-2">Get equipped with high-quality gear.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chessProducts.map((product) => (
            <ProductCard 
              key={product.name} 
              name={product.name} 
              price={product.price} 
              imageUrl={product.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;