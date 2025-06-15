// app/about/page.js
'use client';
import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <>
      <Head>
        <title>About | MedConnect - Find doctors near you</title>
        <meta name="description" content="Learn about MedConnect's mission to help patients find the right doctors near them." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navigation />

        <main className="max-w-4xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
              About MedConnect
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforming healthcare discovery through intelligent matching and personalized care connections
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16 p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              At MedConnect, we believe healthcare should be accessible and transparent. 
              Our mission is to bridge the gap between patients and healthcare providers 
              by creating an intelligent platform that matches patients with the right 
              doctors based on their specific. We're 
              committed to making quality healthcare more discoverable and approachable 
              for everyone.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="mb-16 p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              MedConnect uses advanced technology to understand your healthcare needs 
              and match you with qualified doctors. Simply describe your 
              symptoms and our intelligent system will provide personalized recommendations. 
              We strive to ensure the best possible care by connecting you with qualified healthcare professionals within our network.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose MedConnect
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Smart Search</h3>
                <p className="text-slate-600 text-center">Powerful matching based on your specific healthcare needs</p>
              </div>

              {/* <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Location-Based</h3>
                <p className="text-slate-600 text-center">Find qualified doctors and specialists near you</p>
              </div>

              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Insurance Friendly</h3>
                <p className="text-slate-600 text-center">Filter results by insurance acceptance and coverage</p>
              </div>

              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Verified Reviews</h3>
                <p className="text-slate-600 text-center">Read authentic patient reviews and ratings</p>
              </div>

              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Quick Booking</h3>
                <p className="text-slate-600 text-center">Easy appointment scheduling directly through our platform</p>
              </div> */}

              <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 text-center">Trusted Network</h3>
                <p className="text-slate-600 text-center">Qualified healthcare professionals that we incorporate in our system</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-800 text-white text-center py-8 mt-16">
          <p className="text-slate-300">&copy; MedConnect 2025</p>
        </footer>
      </div>
    </>
  );
}
