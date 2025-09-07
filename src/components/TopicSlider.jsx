import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const TopicSlider = ({ isOpen, onClose, topic }) => {
  const [headings, setHeadings] = useState([])
  const [selectedService, setSelectedService] = useState(null)
  const [serviceContent, setServiceContent] = useState('')

  useEffect(() => {
    if (topic && topic.content) {
      // Extract headings from markdown content
      const headingRegex = /^(#{1,6})\s+(.+)$/gm
      const extractedHeadings = []
      let match

      while ((match = headingRegex.exec(topic.content)) !== null) {
        const level = match[1].length
        const text = match[2] // Keep the original text with markdown formatting
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/\*\*/g, '') // Remove ** for ID generation
        extractedHeadings.push({ level, text, id })
      }

      setHeadings(extractedHeadings)
      
      // Debug: Log headings for non-AWS topics
      if (topic.title !== 'Amazon Web Services') {
        const mainSections = extractedHeadings.filter(h => isMainSection(h))
        console.log('Main sections for', topic.title, ':', mainSections.map(h => h.text))
      }
    }
  }, [topic])

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isServiceSection = (heading) => {
    return heading.level === 3 && heading.text.includes('**')
  }

  const isMainSection = (heading) => {
    return heading.level === 2
  }

  const getServiceContent = (serviceHeading) => {
    if (!topic || !topic.content) return ''
    
    const serviceName = serviceHeading.text.replace(/\*\*/g, '').trim()
    const serviceIndex = headings.findIndex(h => h.id === serviceHeading.id)
    
    // Find the start of this service section by looking for the exact heading text
    const headingText = serviceHeading.text
    const startIndex = topic.content.indexOf(headingText)
    
    if (startIndex === -1) {
      console.log('Service not found:', serviceName, 'Looking for:', headingText)
      return ''
    }
    
    let endIndex = topic.content.length
    
    // Find the next service or end of content
    for (let i = serviceIndex + 1; i < headings.length; i++) {
      const nextHeading = headings[i]
      if (isServiceSection(nextHeading)) {
        const nextHeadingText = nextHeading.text
        const nextStartIndex = topic.content.indexOf(nextHeadingText)
        if (nextStartIndex !== -1) {
          endIndex = nextStartIndex
          break
        }
      }
    }
    
    const content = topic.content.substring(startIndex, endIndex).trim()
    return content
  }

  const getSectionContent = (sectionHeading) => {
    if (!topic || !topic.content) return ''
    
    const sectionName = sectionHeading.text.trim()
    const sectionIndex = headings.findIndex(h => h.id === sectionHeading.id)
    
    // Find the start of this section by looking for the exact heading text
    const headingText = sectionHeading.text
    const startIndex = topic.content.indexOf(headingText)
    
    if (startIndex === -1) {
      console.log('Section not found:', sectionName, 'Looking for:', headingText)
      return ''
    }
    
    let endIndex = topic.content.length
    
    // Find the next main section or end of content
    for (let i = sectionIndex + 1; i < headings.length; i++) {
      const nextHeading = headings[i]
      if (isMainSection(nextHeading)) {
        const nextHeadingText = nextHeading.text
        const nextStartIndex = topic.content.indexOf(nextHeadingText)
        if (nextStartIndex !== -1) {
          endIndex = nextStartIndex
          break
        }
      }
    }
    
    const content = topic.content.substring(startIndex, endIndex).trim()
    console.log('Extracted content for section', sectionName, ':', content.substring(0, 100) + '...')
    return content
  }

  const handleServiceClick = (serviceHeading) => {
    const serviceName = serviceHeading.text.replace(/\*\*/g, '').trim()
    const content = getServiceContent(serviceHeading)
    
    setSelectedService(serviceName)
    setServiceContent(content)
  }

  const handleSectionClick = (sectionHeading) => {
    const sectionName = sectionHeading.text.trim()
    const content = getSectionContent(sectionHeading)
    
    setSelectedService(sectionName)
    setServiceContent(content)
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
                {topic.title === 'Amazon Web Services' ? (
                  // Show only AWS services
                  headings
                    .filter(heading => isServiceSection(heading))
                    .map((heading, index) => {
                      const serviceName = heading.text.replace(/\*\*/g, '').trim()
                      const isSelected = selectedService === serviceName
                      
                      return (
                        <div
                          key={index}
                          onClick={() => handleServiceClick(heading)}
                          className={`cursor-pointer text-sm transition-colors py-2 px-3 rounded ${
                            isSelected 
                              ? 'bg-blue-100 text-blue-900 font-bold' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: heading.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }}
                          />
                        </div>
                      )
                    })
                ) : (
                  // Show main sections for other topics
                  headings
                    .filter(heading => isMainSection(heading))
                    .map((heading, index) => {
                      const sectionName = heading.text.trim()
                      const isSelected = selectedService === sectionName
                      
                      return (
                        <div
                          key={index}
                          onClick={() => handleSectionClick(heading)}
                          className={`cursor-pointer text-sm transition-colors py-2 px-3 rounded ${
                            isSelected 
                              ? 'bg-blue-100 text-blue-900 font-bold' 
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: heading.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            }}
                          />
                        </div>
                      )
                    })
                )}
              </nav>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              {selectedService ? (
                // Show selected service content
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
                        const id = children ? String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'heading'
                        return <h1 id={id}>{children}</h1>
                      },
                      h2: ({ children }) => {
                        const id = children ? String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'heading'
                        return <h2 id={id}>{children}</h2>
                      },
                      h3: ({ children }) => {
                        const id = children ? String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'heading'
                        return <h3 id={id}>{children}</h3>
                      },
                      h4: ({ children }) => {
                        const id = children ? String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'heading'
                        return <h4 id={id}>{children}</h4>
                      },
                      h5: ({ children }) => {
                        const id = children ? String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'heading'
                        return <h5 id={id}>{children}</h5>
                      },
                      h6: ({ children }) => {
                        const id = children ? String(children).toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'heading'
                        return <h6 id={id}>{children}</h6>
                      }
                    }}
                  >
                    {serviceContent}
                  </ReactMarkdown>
                </div>
              ) : (
                // Show topic overview when no section is selected
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">
                    {topic.title === 'Amazon Web Services' ? '☁️' :
                     topic.title === 'React' ? '⚛️' :
                     topic.title === 'TypeScript' ? '📘' :
                     topic.title === 'Node.js' ? '🟢' :
                     topic.title === 'Apache Kafka' ? '🔗' :
                     topic.title === 'Terraform' ? '🏗️' : '📚'}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{topic.title}</h2>
                  <p className="text-gray-600 text-lg mb-8">{topic.description}</p>
                  <p className="text-gray-500 mb-8">Select a topic from the sidebar to view detailed information</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {(topic.title === 'Amazon Web Services' 
                      ? headings.filter(heading => isServiceSection(heading))
                      : headings.filter(heading => isMainSection(heading))
                    ).slice(0, 6).map((heading, index) => (
                      <button
                        key={index}
                        onClick={() => topic.title === 'Amazon Web Services' 
                          ? handleServiceClick(heading) 
                          : handleSectionClick(heading)
                        }
                        className="p-4 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors text-left"
                      >
                        <div
                          className="font-semibold text-sm"
                          dangerouslySetInnerHTML={{
                            __html: heading.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopicSlider
