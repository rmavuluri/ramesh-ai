import React from 'react'

const ArticleSlider = ({ isOpen, onClose, article }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-25 z-60 transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sliding Panel */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white z-70 transform transition-transform duration-500 ease-out shadow-2xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-bold text-black">Article Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close panel"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 h-full overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {article ? (
              <>
                <h1 className="text-3xl font-bold text-black mb-4">{article.title}</h1>
                <p className="text-gray-600 mb-6">By {article.author}</p>
                
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-700 prose-strong:text-black prose-ul:text-gray-700 prose-li:text-gray-700 prose-h2:text-xl prose-h3:text-lg"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </>
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-gray-500">Loading article...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleSlider
