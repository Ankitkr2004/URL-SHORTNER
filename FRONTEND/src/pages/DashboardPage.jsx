import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import { useSelector } from 'react-redux'

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen animated-gradient p-4 pt-20">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-2xl float" style={{animationDelay: '3s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 slide-in-bottom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome back, <span className="text-yellow-300">{user?.name || 'User'}</span>!
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Manage your URLs and track their performance
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-morphism p-6 rounded-2xl hover-scale">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">0</h3>
              <p className="text-white/70">Total URLs</p>
            </div>

            <div className="glass-morphism p-6 rounded-2xl hover-scale" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">0</h3>
              <p className="text-white/70">Total Clicks</p>
            </div>

            <div className="glass-morphism p-6 rounded-2xl hover-scale" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">0%</h3>
              <p className="text-white/70">Click Rate</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* URL Form Section */}
          <div className="lg:col-span-1">
            <div className="glass-morphism p-8 rounded-2xl shadow-2xl hover-scale slide-in-left">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 pulse-slow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Create New URL</h2>
                <p className="text-white/80">Shorten a new URL and add it to your collection</p>
              </div>
              <UrlForm/>
            </div>
          </div>

          {/* URLs List Section */}
          <div className="lg:col-span-2">
            <div className="glass-morphism p-8 rounded-2xl shadow-2xl hover-scale slide-in-right">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Your URLs</h2>
                  <p className="text-white/80">Manage and track your shortened URLs</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all duration-300" title="Search URLs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all duration-300" title="Filter URLs">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all duration-300" title="Refresh List">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scroll hint */}
              <div className="mb-4 flex items-center justify-between text-white/60 text-sm">
                <span>📋 Your shortened URLs</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Scroll to see more
                </span>
              </div>

              <UserUrl/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage