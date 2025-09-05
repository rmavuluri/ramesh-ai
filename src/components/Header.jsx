import React from 'react'

const Header = ({ onToggleNav }) => {
  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wider text-black">
          RAMESH AI
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button 
            onClick={onToggleNav}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Open navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
