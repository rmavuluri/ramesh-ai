import React, { useState, useEffect } from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { loadPageContent } from '../utils/contentLoader'

const MainContent = ({ activePageId }) => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true)
      try {
        // Load content from markdown files for all pages
        const markdownContent = await loadPageContent(activePageId)
        setContent(markdownContent)
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
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div className="text-gray-600 font-medium">Loading content...</div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 lg:p-12">
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent
