import React, { useState } from 'react'
import ArticleSlider from './ArticleSlider'
import { articles } from '../data/articles'

const RightSidebar = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isSliderOpen, setIsSliderOpen] = useState(false)

  const handleReadMore = (article) => {
    // Add a small delay for smoother transition
    if (isSliderOpen) {
      setIsSliderOpen(false)
      setTimeout(() => {
        setSelectedArticle(article)
        setIsSliderOpen(true)
      }, 300)
    } else {
      setSelectedArticle(article)
      setIsSliderOpen(true)
    }
  }

  const handleCloseSlider = () => {
    setIsSliderOpen(false)
    // Keep the article selected for smoother reopening
    setTimeout(() => {
      setSelectedArticle(null)
    }, 500)
  }

  return (
    <>
      <aside className="w-full lg:w-80 bg-white border-l border-gray-200 px-6 py-8 relative z-10">
        <div className="mb-6">
          <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3">
            RECOMMENDED FOR YOU
          </h2>
          <div className="border-t border-gray-200"></div>
        </div>
        
        <div className="space-y-6">
          {articles.map((article, index) => {
            const isActive = selectedArticle && selectedArticle.id === article.id
            return (
              <div 
                key={index} 
                className={`space-y-2 p-3 rounded-lg transition-all duration-200 ${
                  isActive ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                }`}
              >
                <h3 className={`font-semibold text-sm leading-tight transition-colors ${
                  isActive ? 'text-blue-900' : 'text-black'
                }`}>
                  {article.title}
                </h3>
                <p className={`text-xs transition-colors ${
                  isActive ? 'text-blue-700' : 'text-gray-600'
                }`}>
                  {article.author}
                </p>
                <button 
                  onClick={() => handleReadMore(article)}
                  className={`inline-flex items-center text-xs transition-colors cursor-pointer ${
                    isActive 
                      ? 'text-blue-600 hover:text-blue-800' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {isActive ? 'Currently Reading →' : 'Read More →'}
                </button>
              </div>
            )
          })}
        </div>
      </aside>

      <ArticleSlider 
        isOpen={isSliderOpen}
        onClose={handleCloseSlider}
        article={selectedArticle}
      />
    </>
  )
}

export default RightSidebar
