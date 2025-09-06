// Article content loader for Markdown files
const articleCache = new Map()

// Import all article markdown files
import commerceClauseAI from '../content/articles/commerce-clause-ai.md?raw'

// Map of all available article content
const articleContent = {
  'commerce-clause-ai': commerceClauseAI
}

// Get all available article IDs
export const getAvailableArticles = () => {
  return Object.keys(articleContent)
}

// Load article content for a specific article
export const loadArticleContent = async (articleId) => {
  // Check cache first
  if (articleCache.has(articleId)) {
    return articleCache.get(articleId)
  }

  try {
    const content = articleContent[articleId]
    if (!content) {
      throw new Error(`No content found for article: ${articleId}`)
    }
    
    // Cache the content
    articleCache.set(articleId, content)
    return content
  } catch (error) {
    console.error(`Failed to load content for article: ${articleId}`, error)
    return `# Article Not Found\n\nContent for "${articleId}" could not be loaded.\n\nPlease check that the markdown file exists for this article.`
  }
}

// Load content for any article (fallback to markdown or show error)
export const loadArticle = async (articleId) => {
  try {
    // Try to load from markdown first
    const content = await loadArticleContent(articleId)
    return content
  } catch (error) {
    console.error(`Failed to load content for article: ${articleId}`, error)
    return `# Content Not Available\n\nSorry, the content for "${articleId}" is not available.\n\nThis article may be under construction or the content file may be missing.`
  }
}
