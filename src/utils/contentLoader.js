// Content loader for Markdown files
const contentCache = new Map()

// Import all markdown files
import introductionToAI from '../content/introduction-to-ai.md?raw'
import supervisedLearning from '../content/supervised-learning.md?raw'
import unsupervisedLearning from '../content/unsupervised-learning.md?raw'
import reinforcedLearning from '../content/reinforced-learning.md?raw'

const markdownContent = {
  'introduction-to-ai': introductionToAI,
  'supervised-learning': supervisedLearning,
  'unsupervised-learning': unsupervisedLearning,
  'reinforced-learning': reinforcedLearning,
}

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
    return `# Page Not Found\n\nContent for "${pageId}" could not be loaded.`
  }
}

// Default content for existing pages
export const defaultContent = `# The Modern AI Stack

## Experimenting with Proprietary Vendors

> **Focus Area:** Anthropic's Claude models and other proprietary solutions

Our current experimentation focuses on several key proprietary AI vendors, with particular emphasis on Anthropic's Claude models:

- **Fast inference** with GPT-3.5-level accuracy
- **Large context window** for processing long documents
- **Strong performance** on code generation tasks
- **Better instruction following** capabilities

## Open Source Model Integration

> **Strategic Approach:** Cost-effective solutions for specific use cases

We're strategically triaging requests to open source models for:

- **B2C use cases** with cost constraints
- **Domain-specific fine-tuning** opportunities
- **Platform diversity** across Databricks, Anyscale, Mosaic, Modal, and RunPod
- **Inference flexibility** through Hugging Face, Replicate, and other providers

## The Evolving Landscape

Open-source models currently trail proprietary offerings, but the gap is rapidly closing. Key developments include:

- **LLaMa models** from Meta showing significant promise
- **Alternative base models** from Together, Mosaic, Falcon, and Mistral
- **Future iterations** like LLaMa 2 that could dramatically impact the landscape

### The Stable Diffusion Moment

When (not if) open source LLMs reach accuracy levels comparable to GPT-3.5, we expect to see a **Stable Diffusion-like moment** for text—including:

- Massive experimentation across the ecosystem
- Widespread sharing and collaboration
- Accelerated innovation in AI applications
- Democratized access to powerful language models

## Implementation Strategy

### Key Considerations

As organizations adopt AI technologies, several factors become critical for success:

1. **Use Case Alignment** - Match technology to specific requirements
2. **Budget Optimization** - Balance cost and performance
3. **Technical Requirements** - Ensure scalability and reliability
4. **Risk Management** - Mitigate potential downsides

### Recommended Approach

- **Start with proven proprietary models** for critical applications
- **Experiment with open-source alternatives** for cost-sensitive use cases
- **Invest in fine-tuning capabilities** for domain-specific requirements
- **Build robust evaluation frameworks** to compare model performance

---

*This strategic approach ensures we stay ahead of the curve while maintaining cost efficiency and technical excellence.*`
