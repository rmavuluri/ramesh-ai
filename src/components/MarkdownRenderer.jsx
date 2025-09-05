import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const MarkdownRenderer = ({ content }) => {
  return (
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
