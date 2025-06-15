'use client';
import { useState } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    hospital: '',
    specialty: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your submission! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', number: '', hospital: '', specialty: '' });
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | MedConnect - Find doctors near you</title>
        <meta name="description" content="Contact MedConnect to partner with us and help patients find doctors near them." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navigation />

        <main className="max-w-4xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
              Partner With Us
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our network of healthcare providers and help patients discover quality care in their area
            </p>
          </div>
          
          {/* Message Display */}
          {submitMessage && (
            <div className={`mb-8 p-6 rounded-2xl text-center font-medium ${
              submitMessage.includes('error') 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : 'bg-green-50 text-green-700 border border-green-200'
            }`}>
              {submitMessage}
            </div>
          )}

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border text-black border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border text-black border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-semibold text-slate-700 mb-3">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="number" 
                    name="number" 
                    value={formData.number}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border text-black border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="hospital" className="block text-sm font-semibold text-slate-700 mb-3">
                    Hospital
                  </label>
                  <input 
                    type="text" 
                    id="hospital" 
                    name="hospital" 
                    value={formData.hospital}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border text-black border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your hospital Name"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="specialty" className="block text-sm font-semibold text-slate-700 mb-3">
                    Medical Specialty
                  </label>
                  <select 
                    id="specialty" 
                    name="specialty" 
                    value={formData.specialty}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border text-black border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select your specialty</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Allergist">Allergist</option>
                    <option value="Immunologist">Immunologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                    <option value="Hepatologist">Hepatologist</option>
                    <option value="General Practitioner">General Practitioner</option>
                    <option value="Infectious Disease Specialist">Infectious Disease Specialist</option>
                    <option value="Endocrinologist">Endocrinologist</option>
                    <option value="Pulmonologist">Pulmonologist</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Orthopedic Specialist">Orthopedic Specialist</option>
                    <option value="Neurosurgeon">Neurosurgeon</option>
                    <option value="Hematologist">Hematologist</option>
                    <option value="Proctologist">Proctologist</option>
                    <option value="General Surgeon">General Surgeon</option>
                    <option value="Emergency Medicine">Emergency Medicine</option>
                    <option value="Rheumatologist">Rheumatologist</option>
                    <option value="ENT Specialist">ENT Specialist</option>
                    <option value="Urologist">Urologist</option>
                    <option value="Gynecologist">Gynecologist</option>
                  </select>
                  <div className="absolute right-3 top-[44px] pointer-events-none">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Partnership Request'
                  )}
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent">
                Other Ways to Reach Us
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📧</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Email</h4>
                  <p className="text-slate-600">partnerships@medconnect.com</p>
                </div>
                
                <div className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg">
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">📞</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">Phone</h4>
                  <p className="text-slate-600">1-800-MED-CONNECT</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-800 text-white text-center py-8 mt-16">
          <p className="text-slate-300">&copy; MedConnect 2025</p>
        </footer>
      </div>
    </>
  );
}
