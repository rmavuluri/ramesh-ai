import React, { useState, useRef, useEffect } from 'react'
import SearchResults from './SearchResults'
import searchService from '../utils/searchService'

const Header = ({ onToggleNav, onNavigateToPage, onNavigateToArticle, onNavigateToTopic, scrollProgress = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef(null)
  const searchTimeoutRef = useRef(null)

  // Initialize search index
  useEffect(() => {
    console.log('Header mounted, isSearchExpanded:', isSearchExpanded)
    searchService.buildSearchIndex()
  }, [])

  // Debug search expansion state
  useEffect(() => {
    console.log('Search expansion state changed:', isSearchExpanded)
  }, [isSearchExpanded])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      performSearch(searchQuery)
    }
  }

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    // Debounce search
    if (query.trim().length >= 2) {
      setIsSearching(true)
      searchTimeoutRef.current = setTimeout(() => {
        performSearch(query)
      }, 300)
    } else {
      setSearchResults([])
      setIsSearching(false)
    }
  }

  const performSearch = async (query) => {
    try {
      console.log('Performing search for:', query)
      const results = searchService.search(query, 8)
      console.log('Search results received:', results)
      setSearchResults(results)
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleResultClick = (result) => {
    console.log('Search result clicked:', result)
    // Close search
    closeSearch()
    
    // Navigate based on result type
    switch (result.type) {
      case 'page':
        console.log('Navigating to page:', result.id)
        if (onNavigateToPage) {
          onNavigateToPage(result.id)
        }
        break
      case 'article':
        console.log('Navigating to article:', result.id)
        if (onNavigateToArticle) {
          onNavigateToArticle(result.id)
        }
        break
      case 'topic':
        console.log('Navigating to topic:', result.id)
        if (onNavigateToTopic) {
          onNavigateToTopic(result.id)
        }
        break
      default:
        console.log('Unknown result type:', result.type)
    }
  }

  const toggleSearch = () => {
    console.log('Toggle search clicked, current state:', isSearchExpanded)
    setIsSearchExpanded(!isSearchExpanded)
    if (isSearchExpanded) {
      setSearchQuery('')
      setSearchResults([])
    }
  }

  const closeSearch = () => {
    setIsSearchExpanded(false)
    setSearchQuery('')
    setSearchResults([])
    setIsSearching(false)
    
    // Clear search timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }
  }

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch()
      }
    }

    if (isSearchExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchExpanded])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/CR2.png" alt="Ramesh Mavuluri Logo" width="50" height="50" className="mr-3 rounded-full" />
            <div className="text-xl font-bold tracking-wider text-gray-900">
              RAMESH MAVULURI
            </div>
            <div className="hidden md:block ml-8">
              <div className="text-sm text-gray-500">AI Learning Platform</div>
              <div className="text-xs text-blue-600">Scroll: {Math.round(scrollProgress)}%</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Menu Button */}
            <button 
              onClick={onToggleNav}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Expandable Search Bar */}
        {isSearchExpanded && (
          <div className="transition-all duration-300 ease-in-out max-h-96 pb-4 overflow-visible">
          <div ref={searchRef} className="relative z-50">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {isSearching ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search articles, topics, and content..."
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  autoFocus={isSearchExpanded}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
            
            {/* Search Results */}
            {isSearchExpanded && (searchResults.length > 0 || isSearching) && (
              <SearchResults
                results={searchResults}
                onResultClick={handleResultClick}
                onClose={closeSearch}
                isSearching={isSearching}
              />
            )}
          </div>
          </div>
        )}
      </div>
      
      {/* Progress Bar - positioned at the very bottom of the header */}
      <div className="w-full h-1 bg-gray-200">
        <div 
          className="h-full bg-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}

export default Header
