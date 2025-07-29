import React from 'react';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-stone-800 hover:text-stone-600 transition-colors">
        {children}
    </a>
);


const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Get In Touch</h2>
          <p className="text-lg text-stone-600 mt-2">We'd love to hear from you. Visit us or send a message.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map and Details */}
          <div>
            <div className="bg-stone-200 h-80 rounded-lg shadow-md mb-8 flex items-center justify-center">
              <p className="text-stone-500">Location Map Placeholder</p>
            </div>
            <div className="space-y-4 text-stone-700">
                <p><strong>Phone:</strong> +256 761 330 687</p>
                <p><strong>Email:</strong> AbrahamAcademy4Chess@gmail.com</p>
                <p><strong>Location:</strong> Kampala, Uganda</p>
            </div>
            <div className="flex space-x-6 mt-6">
                <SocialIcon href="https://facebook.com/">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.713c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/abrahamchessacademy?igsh=c2R5b2U5aWxoODRo">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.483.01-4.694.067-2.61.12-3.778 1.3-3.9 3.9-.057 1.21-.066 1.55-.066 4.606 0 3.057.01 3.396.066 4.606.122 2.608 1.29 3.778 3.9 3.9 1.21.057 1.577.067 4.694.067 3.117 0 3.482-.01 4.693-.067 2.61-.122 3.778-1.29 3.9-3.9.057-1.21.067-1.55.067-4.606 0-3.057-.01-3.396-.067-4.606-.122-2.608-1.29-3.778-3.9-3.9-1.21-.057-1.576-.067-4.693-.067zM12 7.24a4.76 4.76 0 100 9.52 4.76 4.76 0 000-9.52zm0 6.627a1.867 1.867 0 110-3.733 1.867 1.867 0 010 3.733zm4.94-6.837a1.144 1.144 0 100-2.288 1.144 1.144 0 000 2.288z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://x.com/AbrahamChessA">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.653 19.57h2.61L6.764 3.01H3.94l13.308 17.714z"/></svg>
                </SocialIcon>
                 <SocialIcon href="https://youtube.com/">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9.75 15.6V8.4l6.5 3.6-6.5 3.6z"/></svg>
                </SocialIcon>
            </div>
            <a href="https://wa.me/256761330687" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block w-full text-center bg-stone-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-stone-700 transition-colors shadow-lg">
                Contact via WhatsApp
            </a>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-stone-700 font-bold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-stone-700 font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-stone-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-stone-700 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;