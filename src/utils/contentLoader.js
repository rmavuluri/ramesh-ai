// Content loader for Markdown files
const contentCache = new Map()

// Import all markdown files dynamically
import introductionToAI from '../content/introduction-to-ai.md?raw'
import supervisedLearning from '../content/supervised-learning.md?raw'
import unsupervisedLearning from '../content/unsupervised-learning.md?raw'
import reinforcedLearning from '../content/reinforced-learning.md?raw'

// Map of all available markdown content
const markdownContent = {
  'introduction-to-ai': introductionToAI,
  'supervised-learning': supervisedLearning,
  'unsupervised-learning': unsupervisedLearning,
  'reinforced-learning': reinforcedLearning,
}

// Get all available page IDs
export const getAvailablePages = () => {
  return Object.keys(markdownContent)
}

// Load markdown content for a specific page
export const loadMarkdownContent = async (pageId) => {
  // Check cache first
  if (contentCache.has(pageId)) {
    return contentCache.get(pageId)
  }

  try {
    const content = markdownContent[pageId]
    if (!content) {
      throw new Error(`No content found for page: ${pageId}`)
    }
    
    // Cache the content
    contentCache.set(pageId, content)
    return content
  } catch (error) {
    console.error(`Failed to load content for page: ${pageId}`, error)
    return `# Page Not Found\n\nContent for "${pageId}" could not be loaded.\n\nPlease check that the markdown file exists for this page.`
  }
}

// Load content for any page (fallback to markdown or show error)
export const loadPageContent = async (pageId) => {
  try {
    // Try to load from markdown first
    const content = await loadMarkdownContent(pageId)
    return content
  } catch (error) {
    console.error(`Failed to load content for page: ${pageId}`, error)
    return `# Content Not Available\n\nSorry, the content for "${pageId}" is not available.\n\nThis page may be under construction or the content file may be missing.`
  }
}
