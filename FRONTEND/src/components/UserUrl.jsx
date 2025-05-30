import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllUserUrls } from '../api/user.api'

const UserUrl = () => {
  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
    refetchInterval: 30000, // Refetch every 30 seconds to update click counts
    staleTime: 0, // Consider data stale immediately so it refetches when invalidated
  })
  const [copiedId, setCopiedId] = useState(null)
  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedId(null)
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <div className="spinner"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-red-500/20 border border-red-500/30 text-red-100 px-6 py-4 rounded-xl my-4 slide-in-bottom">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Error loading your URLs: {error.message}
        </div>
      </div>
    )
  }

  if (!urls.urls || urls.urls.length === 0) {
    return (
      <div className="text-center text-white/70 my-6 p-8 bg-white/10 rounded-xl border border-white/20 slide-in-bottom">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <p className="text-lg font-medium text-white mb-2">No URLs found</p>
        <p className="text-white/60">You haven't created any shortened URLs yet. Create your first one above!</p>
      </div>
    )
  }

  return (
    <div className="scroll-container">
      <div className="max-h-96 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {urls.urls.reverse().map((url, index) => (
        <div
          key={url._id}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover-scale card-hover slide-in-bottom"
          style={{animationDelay: `${index * 0.1}s`}}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* URL Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <p className="text-sm font-medium text-white/90 mb-1">Original URL</p>
                    <p className="text-white/70 text-sm truncate" title={url.full_url}>
                      {url.full_url}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90 mb-1">Short URL</p>
                    <a
                      href={`http://localhost:3000/${url.short_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 hover:underline text-sm font-medium"
                    >
                      localhost:3000/{url.short_url}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Actions */}
            <div className="flex items-center space-x-4">
              {/* Click Count */}
              <div className="text-center">
                <div className="bg-white/10 rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-lg font-bold text-white">{url.clicks}</div>
                  <div className="text-xs text-white/70">
                    {url.clicks === 1 ? 'click' : 'clicks'}
                  </div>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(`http://localhost:3000/${url.short_url}`, url._id)}
                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  copiedId === url._id
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}
              >
                {copiedId === url._id ? (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>

              {/* More Actions */}
              <div className="relative">
                <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all duration-300 border border-white/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UserUrl