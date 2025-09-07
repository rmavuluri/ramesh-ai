# Model Context Protocol

## **In the MCP architecture:**

- **Hosts** are LLM applications (like Claude Desktop or IDEs) that initiate connections
- **Clients** maintain 1:1 connections with servers, inside the host application
- **Servers** provide context, tools, and prompts to clients

A single client can connect to multiple servers, and a single server can serve multiple clients. This many-to-many relationship allows for flexible and powerful integrations.

## **MCP Server:**

### Creating an MCP server offers several advantages:

- **Extensibility:** Easily add new capabilities to any MCP-compatible client without modifying the client's core code.
- **Modularity:** Develop and maintain specialized functionalities in isolated, reusable components.
- **Interoperability:** Enable different LLM applications (clients) to share and use the same servers (context sources and tools).
- **Focus:** Concentrate on building unique capabilities and integrations, leveraging the standardized protocol.
- **Security:** Keep sensitive credentials and complex logic contained within the server, often running in a user's trusted environment.

### An MCP server implementation typically involves:

1. **Protocol Handling:** Logic to manage the MCP connection lifecycle, negotiate capabilities, and handle incoming/outgoing JSON-RPC messages (**Requests, Responses, Notifications**). SDKs abstract much of this.
2. **Transport Layer:** The mechanism for sending/receiving messages (e.g., **Stdio, Streamable HTTP**). The SDK provides implementations.
3. **Capability Implementation:** The core logic defining the specific **Tools, Resources, and/or Prompts** the server offers.
4. **Schema Definitions:** Clear definitions (e.g., using JSON Schema or libraries like `zod`) for the inputs and outputs of capabilities.

**MCP servers** can provide three main types of capabilities:

1. **Tools**: Functions that can be called by the LLM (with user approval), Executable functions exposed by servers (e.g., API calls, calculations, system operations)
- **Resources**: File-like data that can be read by clients (like API responses or file contents), aka Data sources exposed by servers (e.g., files, database records, live system data)
- **Prompts**: Pre-defined templates for LLM interactions

## **MCP Clients**

**MCP Clients are the bridge between LLM applications and MCP servers. They handle the communication, discovery, and utilization of above server capabilities**

**Clients are responsible for:**

- Discovering what capabilities servers offer
- Requesting and receiving data from servers
- Executing tools on behalf of the LLM
- Managing connections and error handling
- Implementing security measures like human approval for tool execution

## **MCP Connection lifecycle**

### **1. Initialization**

ServerClientServerClientConnection ready for useinitialize requestinitialize responseinitialized notification

1. Client sends **`initialize`** request with protocol version and capabilities
2. Server responds with its protocol version and capabilities
3. Client sends **`initialized`** notification as acknowledgment
4. Normal message exchange begins

### **2. Message exchange**

After initialization, the following patterns are supported:

- **Request-Response**: Client or server sends requests, the other responds
- **Notifications**: Either party sends one-way messages

### **3. Termination**

Either party can terminate the connection:

- Clean shutdown via **`close()`**
- Transport disconnection
- Error conditions

## **Message types**

MCP has these main types of messages:

1. **Requests** expect a response from the other side:
    
```jsx
    interface Request {
     method: string;
     params?: { ... };
    }
```
    
2. **Results** are successful responses to requests:
    
```jsx
    interface Result {
     [key: string]: unknown;
    }
```
    
3. **Errors** indicate that a request failed:
    
```jsx
    interface Error {
     code: number;
     message: string;
     data?: unknown;
    }
```
    
4. **Notifications** are one-way messages that don’t expect a response:

## **Error handling**

MCP defines these standard error codes:

```jsx
enum ErrorCode {
// Standard JSON-RPC error codes
ParseError = -32700,
InvalidRequest = -32600,
MethodNotFound = -32601,
InvalidParams = -32602,
InternalError = -32603
}
```

SDKs and applications can define their own error codes above -32000.

**Errors are propagated through:**

- Error responses to requests
- Error events on transports
- Protocol-level error handlers

## **Message handling**

**Request processing**

- Validate inputs thoroughly
- Use type-safe schemas
- Handle errors gracefully
- Implement timeouts

**Progress reporting**

- Use progress tokens for long operations
- Report progress incrementally
- Include total progress when known

**Error management**
    
- Use appropriate error codes
- Include helpful error messages
- Clean up resources on errors

## **Security considerations**

**Transport security**

- Use TLS for remote connections
- Validate connection origins
- Implement authentication when needed

**Message validation**

- Validate all incoming messages
- Sanitize inputs
- Check message size limits
- Verify JSON-RPC format

**Resource protection**

- Implement access controls
- Validate resource paths
- Monitor resource usage
- Rate limit requests

**Error handling**

- Don’t leak sensitive information
- Log security-relevant errors
- Implement proper cleanup
- Handle DoS scenarios

## **Debugging and monitoring**

**Logging**

- Log protocol events
- Track message flow
- Monitor performance
- Record errors

**Diagnostics**

- Implement health checks
- Monitor connection state
- Track resource usage
- Profile performance

**Testing**

- Test different transports
- Verify error handling
- Check edge cases
- Load test servers