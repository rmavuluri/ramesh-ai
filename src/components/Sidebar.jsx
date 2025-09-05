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
    <aside className="w-full lg:w-64 bg-white border-r border-gray-200 px-6 py-8">
      <div className="mb-6">
        <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-3">
          TABLE OF CONTENTS
        </h2>
        <div className="border-t border-gray-200"></div>
      </div>
      <nav>
        <ul className="space-y-3">
          {tocItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleItemClick(item.id, e)}
                className={`block text-sm hover:text-gray-600 transition-colors cursor-pointer ${
                  activePageId === item.id
                    ? 'font-bold text-black' 
                    : 'text-gray-700'
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
