import React, { useState, useEffect, useRef } from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { loadArticle } from '../utils/articleLoader'

const ArticleSlider = ({ isOpen, onClose, article }) => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    const loadArticleContent = async () => {
      if (article && article.id) {
        setLoading(true)
        try {
          const markdownContent = await loadArticle(article.id)
          setContent(markdownContent)
        } catch (error) {
          console.error('Error loading article content:', error)
          setContent('# Error\n\nFailed to load article content.')
        } finally {
          setLoading(false)
        }
      }
    }

    loadArticleContent()
  }, [article])

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
        setScrollProgress(Math.min(100, Math.max(0, progress)))
      }
    }

    const contentElement = contentRef.current
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll)
      return () => contentElement.removeEventListener('scroll', handleScroll)
    }
  }, [content, loading])

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
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-xl font-bold text-black">Article Details</h2>
              {article && (
                <p className="text-sm text-gray-600 mt-1">By {article.author}</p>
              )}
            </div>
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
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-200">
            <div 
              className="h-full bg-blue-600 transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
        
        {/* Content */}
        <div ref={contentRef} className="p-6 h-full overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {article ? (
              <>
                {loading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <div className="text-gray-600 font-medium">Loading article...</div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8 lg:p-12">
                      <MarkdownRenderer content={content} />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-gray-500">No article selected</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleSlider
