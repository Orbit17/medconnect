// app/page.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import SearchBar from './components/SearchBar';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    console.log('Search query:', query);
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
            Find Your Perfect Doctor
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with qualified healthcare professionals near you using our powerful matching system
          </p>
        </div>
        
        {/* Search Section */}
        <div className="mb-16">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {/* Search Results */}
        {searchQuery && (
          <div className="mb-16 p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-slate-800">
              Search Results for: <span className="text-indigo-600">"{searchQuery}"</span>
            </h2>
            <div className="text-black">
              Search functionality will be implemented here...
            </div>
          </div>
        )}

        {/* Features Grid - Centered Smart Matching */}
        <div className="flex justify-center mb-16">
          <div className="max-w-md w-full p-12 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl">🔍</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800 text-center">Smart Matching</h3>
            <p className="text-lg text-slate-600 text-center leading-relaxed">
              Our system intelligently matches you with the right specialists based on your specific healthcare symptoms.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-white">Healthcare Provider?</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our network and help patients discover your practice. Grow your patient base with our intelligent matching system.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Partner With Us
            <span className="ml-2">→</span>
          </Link>
        </div>
      </main>
      {/* Footer */}
        <footer className="bg-slate-800 text-white text-center py-8 mt-16">
          <p className="text-slate-300">&copy; MedConnect 2025</p>
        </footer>
    </div>
  );
};
