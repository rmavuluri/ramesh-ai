// Article content loader for Markdown files
const articleCache = new Map()

// Import all article markdown files
import aiWorkstations from '../content/articles/ai-workstations.md?raw'
import mcpServerCapabilities from '../content/articles/mcp-server-capabilities.md?raw'
import solidOopsPrinciples from '../content/articles/solid-oops-principles.md?raw'
import twelveFactors from '../content/articles/12-factors.md?raw'

// Map of all available article content
const articleContent = {
  'ai-workstations': aiWorkstations,
  'mcp-server-capabilities': mcpServerCapabilities,
  'solid-oops-principles': solidOopsPrinciples,
  '12-factors': twelveFactors,
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
