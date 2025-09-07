# Basic information about MCP, Prompts, Tools, Resources, Sampling and Roots'

## **MCP PROMPTS**

Prompts in MCP are predefined templates that can:

- Accept dynamic arguments
- Include context from resources
- Chain multiple interactions
- Guide specific workflows
- Surface as UI elements (like slash commands)

### **Prompt structure**

Each prompt is defined with:
```jsx
{
	name: string;              // Unique identifier for the prompt
	description?: string;      // Human-readable description
	arguments?: [              // Optional list of arguments
			{
			name: string;          // Argument identifier
			description?: string;  // Argument description
			required?: boolean;    // Whether argument is required
			}
	]
}
```

Example Implementation

```jsx
import { Server } from "@modelcontextprotocol/sdk/server";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema
} from "@modelcontextprotocol/sdk/types";

const PROMPTS = {
  "git-commit": {
    name: "git-commit",
    description: "Generate a Git commit message",
    arguments: [
      {
        name: "changes",
        description: "Git diff or description of changes",
        required: true
      }
    ]
  }
};

const server = new Server({
  name: "example-prompts-server",
  version: "1.0.0"
}, {
  capabilities: {
    prompts: {}
  }
});

// List available prompts
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: Object.values(PROMPTS)
  };
});

// Get specific prompt
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const prompt = PROMPTS[request.params.name];
  if (!prompt) {
    throw new Error(`Prompt not found: ${request.params.name}`);
  }

  if (request.params.name === "git-commit") {
    return {
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Generate a concise but descriptive commit message for these changes:\n\n${request.params.arguments?.changes}`
          }
        }
      ]
    };
  }

  throw new Error("Prompt implementation not found");
});
```

## **MCP Tools**

Enable LLMs to perform actions through your server

Tools are a powerful primitive in the Model Context Protocol (MCP) that enable servers to expose executable functionality to clients. Through tools, LLMs can interact with external systems, perform computations, and take actions in the real world.

## **Overview**

Tools in MCP allow servers to expose executable functions that can be invoked by clients and used by LLMs to perform actions. Key aspects of tools include:

- **Discovery**: Clients can list available tools through the **`tools/list`** endpoint
- **Invocation**: Tools are called using the **`tools/call`** endpoint, where servers perform the requested operation and return results
- **Flexibility**: Tools can range from simple calculations to complex API interactions

Like [**resources**](https://modelcontextprotocol.io/docs/concepts/resources), tools are identified by unique names and can include descriptions to guide their usage. However, unlike resources, tools represent dynamic operations that can modify state or interact with external systems.

## **Tool definition structure**

Each tool is defined with the following structure:

```jsx
{
  name: string;          // Unique identifier for the tool
  description?: string;  // Human-readable description
  inputSchema: {         // JSON Schema for the tool's parameters
    type: "object",
    properties: { ... }  // Tool-specific parameters
  },
  annotations?: {        // Optional hints about tool behavior
    title?: string;      // Human-readable title for the tool
    readOnlyHint?: boolean;    // If true, the tool does not modify its environment
    destructiveHint?: boolean; // If true, the tool may perform destructive updates
    idempotentHint?: boolean;  // If true, repeated calls with same args have no additional effect
    openWorldHint?: boolean;   // If true, tool interacts with external entities
  }
}
```
### **Implementing tools**

Here’s an example of implementing a basic tool in an MCP server:

```jsx
const server = new Server({
  name: "example-server",
  version: "1.0.0"
}, {
  capabilities: {
    tools: {}
  }
});

// Define available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [{
      name: "calculate_sum",
      description: "Add two numbers together",
      inputSchema: {
        type: "object",
        properties: {
          a: { type: "number" },
          b: { type: "number" }
        },
        required: ["a", "b"]
      }
    }]
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "calculate_sum") {
    const { a, b } = request.params.arguments;
    return {
      content: [
        {
          type: "text",
          text: String(a + b)
        }
      ]
    };
  }
  throw new Error("Tool not found");
});
```

### **Example tool patterns**

Here are some examples of types of tools that a server could provide:

### **System operations**

Tools that interact with the local system:

```jsx
{
  name: "execute_command",
  description: "Run a shell command",
  inputSchema: {
    type: "object",
    properties: {
      command: { type: "string" },
      args: { type: "array", items: { type: "string" } }
    }
  }
}
```
### **API integrations**

Tools that wrap external APIs:

```jsx
{
  name: "github_create_issue",
  description: "Create a GitHub issue",
  inputSchema: {
    type: "object",
    properties: {
      title: { type: "string" },
      body: { type: "string" },
      labels: { type: "array", items: { type: "string" } }
    }
  }
}
```
### **Data processing**

Tools that transform or analyze data:
```jsx
{
  name: "analyze_csv",
  description: "Analyze a CSV file",
  inputSchema: {
    type: "object",
    properties: {
      filepath: { type: "string" },
      operations: {
        type: "array",
        items: {
          enum: ["sum", "average", "count"]
        }
      }
    }
  }
}
```

## **MCP Resources**

Expose data and content from your servers to LLMs

Resources are a core primitive in the Model Context Protocol (MCP) that allow servers to expose data and content that can be read by clients and used as context for LLM interactions.

Resources are designed to be **application-controlled**, meaning that the client application can decide how and when they should be used. Different MCP clients may handle resources differently. For example:

- Claude Desktop currently requires users to explicitly select resources before they can be used
- Other clients might automatically select resources based on heuristics
- Some implementations may even allow the AI model itself to determine which resources to use

Server authors should be prepared to handle any of these interaction patterns when implementing resource support. In order to expose data to models automatically, server authors should use a **model-controlled** primitive such as [**Tools**](https://modelcontextprotocol.io/docs/concepts/tools).

## **Overview**

Resources represent any kind of data that an MCP server wants to make available to clients. This can include:

- File contents
- Database records
- API responses
- Live system data
- Screenshots and images
- Log files
- And more

Each resource is identified by a unique URI and can contain either text or binary data.

### **Resource URIs**

Resources are identified using URIs that follow this format:

`[protocol]://[host]/[path]`

For example:

- **`file:///home/user/documents/report.pdf`**
- **`postgres://database/customers/schema`**
- **`screen://localhost/display1`**

The protocol and path structure is defined by the MCP server implementation. Servers can define their own custom URI schemes.

## **Resource types**

Resources can contain two types of content:

### **Text resources**

Text resources contain UTF-8 encoded text data. These are suitable for:

- Source code
- Configuration files
- Log files
- JSON/XML data
- Plain text

### **Binary resources**

Binary resources contain raw binary data encoded in base64. These are suitable for:

- Images
- PDFs
- Audio files
- Video files
- Other non-text formats

```jsx
const server = new Server({
name: "example-server",
version: "1.0.0"
}, {
		capabilities: {
		resources: {}
	}
});
// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
return {
	resources: [
			{
				uri: "file:///logs/app.log",
				name: "Application Logs",
				mimeType: "text/plain"
			}
		]
	};
});
```

```jsx
// Read resource contents
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
const uri = request.params.uri;

if (uri === "file:///logs/app.log") {
const logContents = await readLogFile();
return {
		contents: [
			{
				uri,
				mimeType: "text/plain",
				text: logContents
			}
		]
	};
}

throw new Error("Resource not found");
});
```

## **MCP Sampling**

### Let your servers request completions from LLMs

Sampling is a powerful MCP feature that allows servers to request LLM completions through the client, enabling sophisticated agentic behaviors while maintaining security and privacy.

### **How sampling works**

The sampling flow follows these steps:

1. Server sends a **`sampling/createMessage`** request to the client
2. Client reviews the request and can modify it
3. Client samples from an LLM
4. Client reviews the completion
5. Client returns the result to the server

This human-in-the-loop design ensures users maintain control over what the LLM sees and generates.

## **MCP Roots**

Roots are a concept in MCP that define the boundaries where servers can operate. They provide a way for clients to inform servers about relevant resources and their locations.

## **What are Roots?**

A root is a URI that a client suggests a server should focus on. When a client connects to a server, it declares which roots the server should work with. While primarily used for filesystem paths, roots can be any valid URI including HTTP URLs.

For example, roots could be:

```jsx
file:///home/user/projects/myapp
https://api.example.com/v1

```

## **Why Use Roots?**

Roots serve several important purposes:

1. **Guidance**: They inform servers about relevant resources and locations
2. **Clarity**: Roots make it clear which resources are part of your workspace
3. **Organization**: Multiple roots let you work with different resources simultaneously

## **How Roots Work**

When a client supports roots, it:

1. Declares the **`roots`** capability during connection
2. Provides a list of suggested roots to the server
3. Notifies the server when roots change (if supported)

While roots are informational and not strictly enforcing, servers should:

1. Respect the provided roots
2. Use root URIs to locate and access resources
3. Prioritize operations within root boundaries

### **Example**

Here’s how a typical MCP client might expose roots:

```jsx
{
  "roots": [
    {
      "uri": "file:///home/user/projects/frontend",
      "name": "Frontend Repository"
    },
    {
      "uri": "https://api.example.com/v1",
      "name": "API Endpoint"
    }
  ]
}
```