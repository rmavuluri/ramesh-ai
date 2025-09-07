// Article metadata for the right sidebar
export const articles = [
  {
    id: 'ai-workstations',
    title: 'AI Workstations: Hardware Requirements for Modern AI Development',
    author: 'Ramesh Mavuluri',
    year: 2025,
  },
  {
    id: 'mcp-server-capabilities',
    title: 'Basic information about MCP - Prompts, Tools, Resources, Sampling and Roots',
    author: 'Ramesh Mavuluri',
    year: 2025,
  },
  {
    id: 'solid-oops-principles',
    title: 'OOPS Principles - SOLID',
    author: 'Ramesh Mavuluri',
    year: 2024,
  },
  {
    id: '12-factors',
    title: '12 Factors for Software as a service applications',
    author: 'Ramesh Mavuluri',
    year: 2022,
  },

]

// Group articles by year
export const getArticlesByYear = () => {
  const articlesByYear = {}
  
  articles.forEach(article => {
    if (!articlesByYear[article.year]) {
      articlesByYear[article.year] = []
    }
    articlesByYear[article.year].push(article)
  })
  
  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(articlesByYear).sort((a, b) => b - a)
  
  return sortedYears.map(year => ({
    year: parseInt(year),
    articles: articlesByYear[year]
  }))
}

export default articles