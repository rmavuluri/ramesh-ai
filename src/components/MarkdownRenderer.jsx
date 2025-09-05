import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownRenderer = ({ content }) => {
  return (
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
