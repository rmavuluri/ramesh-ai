import React, { useState } from 'react'
import ArticleSlider from './ArticleSlider'
import { getArticlesByYear } from '../data/articles'

const RightSidebar = () => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  
  // Get articles grouped by year
  const articlesByYear = getArticlesByYear()

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
          
          <div className="space-y-6">
            {articlesByYear.map((yearGroup, yearIndex) => (
              <div key={yearGroup.year} className="space-y-3">
                {/* Year Header */}
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="text-lg font-bold text-gray-800">{yearGroup.year}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                </div>
                
                {/* Articles for this year */}
                <div className="space-y-3 sm:space-y-4">
                  {yearGroup.articles.map((article, articleIndex) => {
                    const isActive = selectedArticle && selectedArticle.id === article.id
                    return (
                      <div 
                        key={`${yearGroup.year}-${articleIndex}`} 
                        className={`space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-xl transition-all duration-200 ${
                          isActive ? 'bg-blue-50 border border-blue-200 shadow-sm' : 'hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        <h4 className={`font-semibold text-sm leading-tight transition-colors line-clamp-2 ${
                          isActive ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {article.title}
                        </h4>
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
            ))}
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
