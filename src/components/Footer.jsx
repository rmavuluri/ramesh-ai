import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-200 px-6 py-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          https://ramesh-ai.com/emerging-architectures-for-llm-applications/#
        </div>
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer
