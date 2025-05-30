
import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen animated-gradient flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-2xl float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="relative z-10 slide-in-bottom">
        {/* Hero section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 slide-in-left">
            URL <span className="text-yellow-300">Shortener</span>
          </h1>
          <p className="text-xl text-white/90 mb-2 slide-in-right">
            Transform your long URLs into short, shareable links
          </p>
          <p className="text-lg text-white/70 slide-in-bottom">
            Fast • Secure • Analytics Ready
          </p>
        </div>

        {/* Main form card */}
        <div className="glass-morphism p-8 rounded-2xl shadow-2xl w-full max-w-lg hover-scale">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 pulse-slow">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Shorten Your URL</h2>
            <p className="text-white/80">Enter your long URL below to get started</p>
          </div>
          <UrlForm/>
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
          <div className="glass-morphism p-6 rounded-xl text-center hover-glow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-white/70 text-sm">Generate short URLs in milliseconds</p>
          </div>

          <div className="glass-morphism p-6 rounded-xl text-center hover-glow" style={{animationDelay: '0.2s'}}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Safe</h3>
            <p className="text-white/70 text-sm">Your URLs are protected and encrypted</p>
          </div>

          <div className="glass-morphism p-6 rounded-xl text-center hover-glow" style={{animationDelay: '0.4s'}}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Analytics Ready</h3>
            <p className="text-white/70 text-sm">Track clicks and performance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage