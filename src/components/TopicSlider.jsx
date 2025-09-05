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
              <div className="markdown-content prose prose-xl max-w-none
                [&>h1]:text-4xl [&>h1]:font-extrabold [&>h1]:text-gray-900 [&>h1]:mb-8 [&>h1]:mt-0 [&>h1]:border-b [&>h1]:border-gray-200 [&>h1]:pb-4
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-blue-900 [&>h2]:mb-6 [&>h2]:mt-12 [&>h2]:border-b [&>h2]:border-blue-100 [&>h2]:pb-2
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mb-4 [&>h3]:mt-8
                [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-gray-800 [&>h4]:mb-3 [&>h4]:mt-6
                [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-base
                [&>strong]:text-gray-900 [&>strong]:font-semibold
                [&>ul]:text-gray-700 [&>ul]:mb-6 [&>ul]:pl-6 [&>ul]:space-y-2
                [&>ul>li]:text-gray-700 [&>ul>li]:mb-2 [&>ul>li]:leading-relaxed [&>ul>li]:marker:text-blue-500
                [&>ol]:text-gray-700 [&>ol]:mb-6 [&>ol]:pl-6 [&>ol]:space-y-2
                [&>ol>li]:text-gray-700 [&>ol>li]:mb-2 [&>ol>li]:leading-relaxed
                [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:bg-blue-50 [&>blockquote]:text-blue-900 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:rounded-r-lg [&>blockquote]:shadow-sm
                [&>code]:text-blue-600 [&>code]:bg-blue-50 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>code]:border [&>code]:border-blue-200
                [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:p-6 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-8 [&>pre]:shadow-lg [&>pre]:border [&>pre]:border-gray-700
                [&>a]:text-blue-600 [&>a]:no-underline [&>a]:hover:text-blue-800 [&>a]:font-medium [&>a]:transition-colors [&>a]:duration-200
                [&>table]:text-sm [&>table]:mb-6 [&>table]:shadow-sm [&>table]:rounded-lg [&>table]:overflow-hidden
                [&>th]:bg-gray-50 [&>th]:font-semibold [&>th]:text-gray-900 [&>th]:px-4 [&>th]:py-3 [&>th]:border [&>th]:border-gray-200 [&>th]:text-left
                [&>td]:px-4 [&>td]:py-3 [&>td]:border [&>td]:border-gray-200 [&>td]:text-gray-700 [&>td]:bg-white
                [&>img]:rounded-lg [&>img]:shadow-md [&>img]:my-8 [&>img]:border [&>img]:border-gray-200
                [&>hr]:border-gray-200 [&>hr]:my-12 [&>hr]:border-t-2
                [&>em]:text-gray-600 [&>em]:italic
                [&>del]:text-gray-500 [&>del]:line-through
                [&>mark]:bg-yellow-200 [&>mark]:text-yellow-900 [&>mark]:px-1 [&>mark]:rounded
                [&>kbd]:bg-gray-100 [&>kbd]:border [&>kbd]:border-gray-300 [&>kbd]:rounded [&>kbd]:px-2 [&>kbd]:py-1 [&>kbd]:text-sm [&>kbd]:font-mono">
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
