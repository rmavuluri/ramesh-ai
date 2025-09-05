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
      <aside className="w-full lg:w-80 bg-white border-l border-gray-200 shadow-sm relative z-10">
        <div className="p-4 sm:p-6">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
              RECOMMENDED FOR YOU
            </h2>
            <div className="border-t border-gray-200"></div>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {articles.map((article, index) => {
              const isActive = selectedArticle && selectedArticle.id === article.id
              return (
                <div 
                  key={index} 
                  className={`space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                    isActive ? 'bg-blue-50 border border-blue-200 shadow-sm' : 'hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <h3 className={`font-semibold text-sm leading-tight transition-colors line-clamp-2 ${
                    isActive ? 'text-blue-900' : 'text-gray-900'
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
                    className={`inline-flex items-center text-xs font-medium transition-colors cursor-pointer ${
                      isActive 
                        ? 'text-blue-600 hover:text-blue-800' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {isActive ? 'Currently Reading →' : 'Read More →'}
                  </button>
                </div>
              )
            })}
          </div>
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
