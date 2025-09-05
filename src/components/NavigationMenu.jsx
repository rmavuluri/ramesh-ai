import React, { useState } from 'react'
import TopicSlider from './TopicSlider'
import { navigationTopics } from '../data/navigationTopics'

const NavigationMenu = ({ isOpen, onClose }) => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [isTopicSliderOpen, setIsTopicSliderOpen] = useState(false)

  const navigationItems = [
    'KAFKA',
    'TERRAFORM',
    'AWS',
    'SPRING-BOOT',
    'NODEJS',
    'TypeScript',
    'Core JAVA',
    'Hibernate',
    'REST Services',
    'API Development'
  ]

  const handleTopicClick = (topicKey) => {
    const topic = navigationTopics[topicKey]
    if (topic) {
      setSelectedTopic(topic)
      setIsTopicSliderOpen(true)
    }
  }

  const handleCloseTopicSlider = () => {
    setIsTopicSliderOpen(false)
    setTimeout(() => {
      setSelectedTopic(null)
    }, 500)
  }

  return (
    <>
      {/* No backdrop - let the main content remain fully visible */}
      
      {/* Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b border-gray-200 bg-gray-50">
          <div className="text-xl font-bold tracking-wider text-gray-900">
            Interested Topics
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation Items */}
        <nav className="p-6 overflow-y-auto flex-1">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => {
              const topicKey = item.replace(/\s+/g, '-').toUpperCase()
              const hasContent = navigationTopics[topicKey]
              
              return (
                <li key={index}>
                  <button
                    onClick={() => hasContent ? handleTopicClick(topicKey) : null}
                    className={`block w-full text-left text-gray-900 hover:text-blue-600 transition-colors py-3 px-4 text-sm font-medium rounded-lg ${
                      hasContent 
                        ? 'hover:bg-blue-50 cursor-pointer' 
                        : 'cursor-not-allowed opacity-50'
                    }`}
                    disabled={!hasContent}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      {hasContent && (
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Topic Slider */}
      <TopicSlider 
        isOpen={isTopicSliderOpen}
        onClose={handleCloseTopicSlider}
        topic={selectedTopic}
      />
    </>
  )
}

export default NavigationMenu
