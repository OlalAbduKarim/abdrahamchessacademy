import React, { useState, useEffect } from 'react';
import { trainingPrograms } from '../constants';

interface RegistrationPageProps {
  onNavigateHome: () => void;
  selectedProgram: string;
}

const RegistrationPage = ({ onNavigateHome, selectedProgram }: RegistrationPageProps) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    studentAge: '',
    email: '',
    phone: '',
    program: selectedProgram || '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  useEffect(() => {
    setFormData(prev => ({ ...prev, program: selectedProgram }));
  }, [selectedProgram]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { parentName, studentName, studentAge, email, phone, program, message } = formData;

    const subject = `New Registration for Abraham Chess Academy: ${studentName}`;
    const body = `A new registration has been submitted.\n
Details:
- Parent/Guardian's Name: ${parentName}
- Student's Name: ${studentName}
- Student's Age: ${studentAge}
- Contact Email: ${email}
- Contact Phone: ${phone}
- Selected Program: ${program}
- Additional Message:
${message || 'None'}
`;
    
    window.location.href = `mailto:olalabdukarim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus('submitted');
  };

  if (status === 'submitted') {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">Thank You!</h1>
        <p className="text-lg text-stone-600 mb-6">
          Your registration details are ready to be sent. Please check your default email application to complete the process.
        </p>
        <button
          onClick={onNavigateHome}
          className="bg-stone-800 text-white font-bold py-3 px-8 rounded-lg hover:bg-stone-700 transition-colors shadow-lg"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <section id="register" className="py-28 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Enroll at the Academy</h2>
            <p className="text-lg text-stone-600 mt-2">Complete the form below to begin your chess journey.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="parentName" className="block text-stone-700 font-bold mb-2">Parent/Guardian's Name</label>
                  <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="studentName" className="block text-stone-700 font-bold mb-2">Student's Full Name</label>
                  <input type="text" id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" required />
                </div>
                 <div className="mb-4">
                  <label htmlFor="studentAge" className="block text-stone-700 font-bold mb-2">Student's Age</label>
                  <input type="number" id="studentAge" name="studentAge" value={formData.studentAge} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" required />
                </div>
                 <div className="mb-4">
                  <label htmlFor="phone" className="block text-stone-700 font-bold mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" required />
                </div>
              </div>
               <div className="mb-4">
                <label htmlFor="email" className="block text-stone-700 font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="program" className="block text-stone-700 font-bold mb-2">Select a Training Program</label>
                <select id="program" name="program" value={formData.program} onChange={handleChange} className="w-full px-3 py-2 border bg-white border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500" required>
                  <option value="" disabled>-- Please choose a program --</option>
                  {trainingPrograms.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-stone-700 font-bold mb-2">Additional Message (Optional)</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-stone-700 transition-colors shadow-md">
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;