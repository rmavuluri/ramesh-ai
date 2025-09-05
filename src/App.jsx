import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import RightSidebar from './components/RightSidebar'
import Footer from './components/Footer'
import NavigationMenu from './components/NavigationMenu'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activePageId, setActivePageId] = useState('introduction-to-ai')

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  const handlePageChange = (pageId) => {
    setActivePageId(pageId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onToggleNav={toggleNav} />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar onPageChange={handlePageChange} activePageId={activePageId} />
        <MainContent activePageId={activePageId} />
        <RightSidebar />
      </div>
      <Footer />
      <NavigationMenu isOpen={isNavOpen} onClose={closeNav} />
    </div>
  )
}

export default App
