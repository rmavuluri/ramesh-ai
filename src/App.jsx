import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'
import Footer from './components/Footer'
import NavigationMenu from './components/NavigationMenu'
import TopicSlider from './components/TopicSlider'
import AboutMeSlider from './components/AboutMeSlider'
import { navigationTopics } from './data/navigationTopics'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activePageId, setActivePageId] = useState('introduction-to-ai')
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [isTopicSliderOpen, setIsTopicSliderOpen] = useState(false)
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll progress tracking for main page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  const handlePageChange = (pageId) => {
    setActivePageId(pageId)
  }

  // Navigation handlers for search results
  const handleNavigateToPage = (pageId) => {
    setActivePageId(pageId)
  }

  const handleNavigateToArticle = (articleId) => {
    // For now, we'll just log this - you can implement article navigation later
    console.log('Navigate to article:', articleId)
  }

  const handleNavigateToTopic = (topicId) => {
    console.log('Navigate to topic:', topicId)
    // Find the topic in navigationTopics - search service uses lowercase keys
    const topic = navigationTopics[topicId.toUpperCase()]
    if (topic) {
      setSelectedTopic(topic)
      setIsTopicSliderOpen(true)
    } else {
      console.error('Topic not found:', topicId, 'Available topics:', Object.keys(navigationTopics))
    }
  }

  const handleCloseTopicSlider = () => {
    setIsTopicSliderOpen(false)
    setTimeout(() => {
      setSelectedTopic(null)
    }, 500)
  }

  const handleAboutMeClick = () => {
    setIsAboutMeOpen(true)
  }

  const handleCloseAboutMe = () => {
    setIsAboutMeOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onToggleNav={toggleNav}
        onNavigateToPage={handleNavigateToPage}
        onNavigateToArticle={handleNavigateToArticle}
        onNavigateToTopic={handleNavigateToTopic}
        scrollProgress={scrollProgress}
      />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar onPageChange={handlePageChange} activePageId={activePageId} />
        <MainContent activePageId={activePageId} />
        <RightSidebar />
      </div>
      <Footer onAboutMeClick={handleAboutMeClick} />
      <NavigationMenu isOpen={isNavOpen} onClose={closeNav} />
      <TopicSlider
        isOpen={isTopicSliderOpen}
        onClose={handleCloseTopicSlider}
        topic={selectedTopic}
      />
      <AboutMeSlider
        isOpen={isAboutMeOpen}
        onClose={handleCloseAboutMe}
      />
    </div>
  )
}

export default App
