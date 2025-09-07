// Search service for indexing and searching content
import { loadMarkdownContent } from './contentLoader'
import { loadArticle } from './articleLoader'
import { articles } from '../data/articles'
import { navigationTopics } from '../data/navigationTopics'

class SearchService {
  constructor() {
    this.searchIndex = []
    this.isIndexed = false
  }

  // Build search index from all available content
  async buildSearchIndex() {
    if (this.isIndexed) {
      console.log('Search index already built:', this.searchIndex.length, 'items')
      return
    }

    console.log('Building search index...')
    this.searchIndex = []

    try {
      // Index main pages
      await this.indexMainPages()
      console.log('Main pages indexed:', this.searchIndex.length)
      
      // Index articles
      await this.indexArticles()
      console.log('Articles indexed:', this.searchIndex.length)
      
      // Index navigation topics
      this.indexNavigationTopics()
      console.log('Navigation topics indexed:', this.searchIndex.length)
      
      this.isIndexed = true
      console.log('Search index built successfully:', this.searchIndex.length, 'items')
    } catch (error) {
      console.error('Error building search index:', error)
    }
  }

  // Index main content pages
  async indexMainPages() {
    const pages = [
      { id: 'introduction-to-ai', title: 'Introduction to AI' },
      { id: 'introduction-to-llm', title: 'Large Language Models' },
      { id: 'supervised-learning', title: 'Supervised Learning' },
      { id: 'unsupervised-learning', title: 'Unsupervised Learning' },
      { id: 'reinforced-learning', title: 'Reinforced Learning' },
      { id: 'generative-ai-models', title: 'Generative AI Models' }
    ]

    for (const page of pages) {
      try {
        const content = await loadMarkdownContent(page.id)
        const searchableContent = this.extractSearchableText(content)
        
        this.searchIndex.push({
          id: page.id,
          title: page.title,
          content: searchableContent,
          type: 'page',
          url: `#${page.id}`,
          category: 'Learning Content'
        })
      } catch (error) {
        console.error(`Error indexing page ${page.id}:`, error)
      }
    }
  }

  // Index articles
  async indexArticles() {
    for (const article of articles) {
      try {
        const content = await loadArticle(article.id)
        const searchableContent = this.extractSearchableText(content)
        
        this.searchIndex.push({
          id: article.id,
          title: article.title,
          author: article.author,
          content: searchableContent,
          type: 'article',
          url: `#article-${article.id}`,
          category: 'Articles'
        })
      } catch (error) {
        console.error(`Error indexing article ${article.id}:`, error)
      }
    }
  }

  // Index navigation topics
  indexNavigationTopics() {
    for (const [key, topic] of Object.entries(navigationTopics)) {
      if (topic.title && topic.description) {
        const searchableContent = this.extractSearchableText(topic.content || '')
        
        this.searchIndex.push({
          id: key,
          title: topic.title,
          content: searchableContent,
          type: 'topic',
          url: `#topic-${key}`,
          category: 'Technical Topics'
        })
      }
    }
  }

  // Extract searchable text from markdown content
  extractSearchableText(content) {
    if (!content) return ''
    
    // Remove markdown syntax and extract plain text
    return content
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italic
      .replace(/`(.*?)`/g, '$1') // Remove code
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1') // Remove images
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim()
  }

  // Search through indexed content
  search(query, limit = 10) {
    if (!this.isIndexed || !query.trim()) {
      console.log('Search not indexed or empty query:', { isIndexed: this.isIndexed, query })
      return []
    }

    const searchQuery = query.toLowerCase().trim()
    const results = []

    console.log('Searching for:', searchQuery, 'in', this.searchIndex.length, 'items')

    for (const item of this.searchIndex) {
      const score = this.calculateRelevanceScore(item, searchQuery)
      if (score > 0) {
        results.push({
          ...item,
          score,
          highlightedTitle: this.highlightText(item.title, searchQuery),
          highlightedContent: this.highlightText(
            item.content.substring(0, 200) + (item.content.length > 200 ? '...' : ''),
            searchQuery
          )
        })
      }
    }

    console.log('Search results:', results.length)

    // Sort by relevance score and return top results
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
  }

  // Calculate relevance score for search results
  calculateRelevanceScore(item, query) {
    let score = 0
    const title = item.title.toLowerCase()
    const content = item.content.toLowerCase()
    const author = (item.author || '').toLowerCase()

    // Exact title match gets highest score
    if (title === query) {
      score += 100
    } else if (title.includes(query)) {
      score += 50
    }

    // Title starts with query gets high score
    if (title.startsWith(query)) {
      score += 30
    }

    // Author match
    if (author.includes(query)) {
      score += 20
    }

    // Content match
    if (content.includes(query)) {
      score += 10
    }

    // Word boundary matches get bonus points
    const wordBoundaryRegex = new RegExp(`\\b${query}\\b`, 'gi')
    const titleMatches = (item.title.match(wordBoundaryRegex) || []).length
    const contentMatches = (item.content.match(wordBoundaryRegex) || []).length
    
    score += titleMatches * 15
    score += contentMatches * 5

    return score
  }

  // Highlight matching text in results
  highlightText(text, query) {
    if (!query) return text
    
    const regex = new RegExp(`(${query})`, 'gi')
    return text.replace(regex, '<mark class="bg-yellow-200 text-yellow-900 px-1 rounded">$1</mark>')
  }

  // Get search suggestions
  getSuggestions(query, limit = 5) {
    if (!query || query.length < 2) return []
    
    const results = this.search(query, limit)
    return results.map(result => ({
      id: result.id,
      title: result.title,
      type: result.type,
      category: result.category
    }))
  }
}

// Create singleton instance
const searchService = new SearchService()

export default searchService
