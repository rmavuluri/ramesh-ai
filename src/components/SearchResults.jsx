import React from 'react'

const SearchResults = ({ results, onResultClick, onClose, isSearching }) => {
  if (isSearching) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div className="p-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Searching...</span>
          </div>
        </div>
      </div>
    )
  }

  if (!results || results.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
        <div className="p-4 text-center text-gray-500">
          No results found
        </div>
      </div>
    )
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'page':
        return (
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      case 'article':
        return (
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        )
      case 'topic':
        return (
          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      default:
        return (
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'page':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'article':
        return 'bg-green-50 text-green-700 border-green-200'
      case 'topic':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] max-h-96 overflow-y-auto">
      <div className="p-2">
        <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
          {results.length} result{results.length !== 1 ? 's' : ''} found
        </div>
        {results.map((result, index) => (
          <button
            key={`${result.type}-${result.id}-${index}`}
            onClick={() => onResultClick(result)}
            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getTypeIcon(result.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span 
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(result.type)}`}
                  >
                    {result.category}
                  </span>
                </div>
                <h4 
                  className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors"
                  dangerouslySetInnerHTML={{ __html: result.highlightedTitle }}
                />
                {result.author && (
                  <p className="text-xs text-gray-500 mt-1">By {result.author}</p>
                )}
                {result.highlightedContent && (
                  <p 
                    className="text-xs text-gray-600 mt-1 line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: result.highlightedContent }}
                  />
                )}
              </div>
              <div className="flex-shrink-0">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
