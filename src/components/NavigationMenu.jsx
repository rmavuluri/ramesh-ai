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
      {/* Backdrop - only covers main content area, not the entire screen */}
      {isOpen && (
        <div 
          className="fixed top-0 left-0 h-full z-40"
          onClick={onClose}
          style={{ width: 'calc(100% - 320px)' }}
        />
      )}
      
      {/* Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-90 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="text-2xl font-bold tracking-wider text-black">
            Interested Topics
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation Items */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navigationItems.map((item, index) => {
              const topicKey = item.replace(/\s+/g, '-').toUpperCase()
              const hasContent = navigationTopics[topicKey]
              
              return (
                <li key={index}>
                  <button
                    onClick={() => hasContent ? handleTopicClick(topicKey) : null}
                    className={`block w-full text-left text-black hover:text-blue-600 transition-colors py-2 text-base font-medium rounded px-3 ${
                      hasContent 
                        ? 'hover:bg-blue-50 cursor-pointer' 
                        : 'cursor-not-allowed opacity-50'
                    }`}
                    disabled={!hasContent}
                  >
                    {item}
                    {hasContent && (
                      <span className="ml-2 text-xs text-gray-500">→</span>
                    )}
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
