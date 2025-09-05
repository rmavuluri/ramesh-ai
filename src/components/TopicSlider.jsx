import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const TopicSlider = ({ isOpen, onClose, topic }) => {
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    if (topic && topic.content) {
      // Extract headings from markdown content
      const headingRegex = /^(#{1,6})\s+(.+)$/gm
      const extractedHeadings = []
      let match

      while ((match = headingRegex.exec(topic.content)) !== null) {
        const level = match[1].length
        const text = match[2]
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        extractedHeadings.push({ level, text, id })
      }

      setHeadings(extractedHeadings)
    }
  }, [topic])

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!topic) return null

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
          <div>
            <h2 className="text-2xl font-bold text-black">{topic.title}</h2>
            <p className="text-gray-600 mt-1">{topic.description}</p>
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
        
        <div className="flex h-full">
          {/* Table of Contents Sidebar */}
          {headings.length > 0 && (
            <div className="w-80 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {headings.map((heading, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToHeading(heading.id)}
                    className={`block w-full text-left text-sm hover:text-blue-600 transition-colors py-2 px-3 rounded ${
                      heading.level === 1 ? 'font-bold text-gray-900' :
                      heading.level === 2 ? 'font-semibold text-gray-800 ml-2' :
                      heading.level === 3 ? 'text-gray-700 ml-4' :
                      'text-gray-600 ml-6'
                    }`}
                  >
                    {heading.text}
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-xl max-w-none 
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-0 prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-4
                prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:text-blue-900
                prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-gray-800
                prose-h4:text-lg prose-h4:mb-3 prose-h4:mt-6 prose-h4:text-gray-800
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:text-gray-700 prose-ul:mb-6 prose-ul:pl-6
                prose-li:text-gray-700 prose-li:mb-2 prose-li:leading-relaxed
                prose-ol:text-gray-700 prose-ol:mb-6 prose-ol:pl-6
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:text-blue-900 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
                prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-8
                prose-a:text-blue-600 prose-a:no-underline prose-a:hover:text-blue-800 prose-a:font-medium
                prose-table:text-sm prose-table:mb-6
                prose-th:bg-gray-50 prose-th:font-semibold prose-th:text-gray-900 prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-gray-200
                prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-gray-200 prose-td:text-gray-700
                prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
                prose-hr:border-gray-200 prose-hr:my-12">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => {
                      const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      return <h1 id={id}>{children}</h1>
                    },
                    h2: ({ children }) => {
                      const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      return <h2 id={id}>{children}</h2>
                    },
                    h3: ({ children }) => {
                      const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      return <h3 id={id}>{children}</h3>
                    },
                    h4: ({ children }) => {
                      const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      return <h4 id={id}>{children}</h4>
                    },
                    h5: ({ children }) => {
                      const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      return <h5 id={id}>{children}</h5>
                    },
                    h6: ({ children }) => {
                      const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-')
                      return <h6 id={id}>{children}</h6>
                    }
                  }}
                >
                  {topic.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopicSlider
