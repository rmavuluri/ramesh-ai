import React, { useState, useEffect } from 'react'
import tableOfContentsData from '../data/tableOfContents.json'

const Sidebar = ({ onPageChange, activePageId }) => {
  const [tocItems, setTocItems] = useState([])

  useEffect(() => {
    // Load table of contents from JSON
    setTocItems(tableOfContentsData.items)
  }, [])

  const handleItemClick = (itemId, e) => {
    e.preventDefault()
    onPageChange(itemId)
  }

  return (
    <aside className="w-full lg:w-72 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-4 sm:p-6">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 sm:mb-4">
            TABLE OF CONTENTS
          </h2>
          <div className="border-t border-gray-200"></div>
        </div>
        <nav>
          <ul className="space-y-1 sm:space-y-2">
            {tocItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleItemClick(item.id, e)}
                  className={`block px-3 sm:px-4 py-2 sm:py-3 text-sm rounded-lg transition-all duration-200 cursor-pointer ${
                    activePageId === item.id
                      ? 'bg-black-50 text-black-900 font-semibold border-l-4 border-black-500' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    {/* <div className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${
                      activePageId === item.id ? 'bg-yellow-500' : 'bg-gray-100'
                    }`}></div> */}
                    <span className="truncate">{item.title}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
