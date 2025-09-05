import React, { useState, useEffect } from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { loadMarkdownContent, defaultContent } from '../utils/contentLoader'

const MainContent = ({ activePageId }) => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true)
      try {
        // Check if it's one of the new AI pages
        const aiPages = ['introduction-to-ai', 'supervised-learning', 'unsupervised-learning', 'reinforced-learning']
        
        if (aiPages.includes(activePageId)) {
          const markdownContent = await loadMarkdownContent(activePageId)
          setContent(markdownContent)
        } else {
          // Use default content for existing pages
          setContent(defaultContent)
        }
      } catch (error) {
        console.error('Error loading content:', error)
        setContent('# Error\n\nFailed to load content.')
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [activePageId])

  if (loading) {
    return (
      <main className="flex-1 px-6 lg:px-12 py-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <div className="text-gray-600 font-medium">Loading content...</div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 px-6 lg:px-12 py-12 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
        <MarkdownRenderer content={content} />
      </div>
    </main>
  )
}

export default MainContent
