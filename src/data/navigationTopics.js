// Detailed content for navigation menu topics
export const navigationTopics = {
  'KAFKA': {
    title: 'Apache Kafka',
    description: 'Distributed streaming platform for building real-time data pipelines',
    content: `
# Apache Kafka

Apache Kafka is a distributed streaming platform that enables you to build real-time data pipelines and streaming applications. It's designed to handle trillions of events per day.

## What is Kafka?


  `
  },
  'TERRAFORM': {
    title: 'Terraform',
    description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure',
    content: `
# Terraform

Terraform is an open-source Infrastructure as Code (IaC) tool that enables you to define and provision data center infrastructure using a declarative configuration language.

## What is Terraform?


    `
  },
  'AWS': {
    title: 'Amazon Web Services',
    description: 'Comprehensive cloud computing platform offering over 200 services',
    content: `
# Amazon Web Services (AWS)

Amazon Web Services is a comprehensive cloud computing platform that provides over 200 services for computing, storage, databases, networking, analytics, machine learning, and more.

## What is AWS?

AWS is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. It provides on-demand cloud computing platforms and APIs to individuals, companies, and governments on a metered pay-as-you-go basis.

## Core AWS Services

### **Amazon ECS Fargate**

#### What is ECS Fargate?

Amazon ECS Fargate is a serverless compute engine for containers. It allows you to run containers without managing servers or clusters. Think of it as a way to run your containerized applications without worrying about the underlying infrastructure.

#### Key Features

- **Serverless**: No server management required
- **Pay-per-use**: Only pay for the resources you use
- **Automatic scaling**: Scales based on demand
- **Security**: Built-in security and compliance
- **Integration**: Works with ECS and EKS

#### Why it matters?

ECS Fargate matters because it eliminates the complexity of managing servers while running containerized applications. It allows developers to focus on building applications rather than managing infrastructure, making it easier to deploy and scale applications.

#### What to learn?

- Container concepts and Docker
- ECS task definitions and services
- Networking and security groups
- Load balancing and auto-scaling
- Monitoring and logging

#### How it works?

1. You define your application in a task definition
2. ECS Fargate provisions the compute resources
3. Your containers run on managed infrastructure
4. Fargate handles scaling and resource management
5. You only pay for the resources your containers use

#### Common Use Cases

- Microservices architecture
- Batch processing jobs
- Web applications and APIs
- Data processing pipelines
- Development and testing environments

#### Benefits

- **No server management**: Focus on your application
- **Automatic scaling**: Handles traffic spikes
- **Cost-effective**: Pay only for what you use
- **Secure**: Built-in security features
- **Reliable**: High availability and fault tolerance

#### Limitations

- **Cold starts**: Initial startup time for new tasks
- **Resource limits**: Maximum CPU and memory per task
- **Cost**: Can be expensive for long-running applications
- **Vendor lock-in**: Tied to AWS ecosystem
- **Debugging**: Limited access to underlying infrastructure

#### Integrate with other services

- **ECS**: Container orchestration
- **EKS**: Kubernetes on AWS
- **ALB/NLB**: Load balancing
- **CloudWatch**: Monitoring and logging
- **IAM**: Security and access control
- **VPC**: Networking and security

### **AWS Lambda**

#### What is AWS Lambda?

AWS Lambda is a serverless compute service that runs your code in response to events. It automatically manages the compute resources and you only pay for the compute time you consume.

#### Key Features

- **Event-driven**: Responds to events from other AWS services
- **Automatic scaling**: Scales automatically with demand
- **Pay-per-request**: Only pay for actual usage
- **Multiple languages**: Supports many programming languages
- **Integration**: Works with 200+ AWS services

#### Why it matters?

Lambda matters because it enables event-driven architectures and microservices without server management. It's perfect for building scalable, cost-effective applications that respond to events in real-time.

#### What to learn?

- Serverless architecture concepts
- Event-driven programming
- AWS SDK and APIs
- Error handling and retry logic
- Monitoring and debugging

#### How it works?

1. You upload your code as a function
2. Lambda automatically provisions compute resources
3. Your function runs when triggered by events
4. Lambda scales automatically based on demand
5. You pay only for the execution time

#### Common Use Cases

- API backends and web services
- Data processing and ETL jobs
- Real-time file processing
- Scheduled tasks and cron jobs
- IoT data processing
- Chatbots and voice assistants

#### Benefits

- **No server management**: Focus on code, not infrastructure
- **Automatic scaling**: Handles any amount of traffic
- **Cost-effective**: Pay per request, not per server
- **Fast deployment**: Deploy code quickly
- **High availability**: Built-in fault tolerance

#### Limitations

- **Execution time limit**: Maximum 15 minutes per execution
- **Memory limits**: Maximum 10GB memory per function
- **Cold starts**: Initial startup delay
- **Vendor lock-in**: Tied to AWS ecosystem
- **Debugging complexity**: Limited debugging options

#### Integrate with other services

- **API Gateway**: HTTP APIs
- **S3**: File processing
- **DynamoDB**: Database operations
- **SNS/SQS**: Messaging
- **EventBridge**: Event routing
- **CloudWatch**: Monitoring

### **AWS EventBridge**

#### What is AWS EventBridge?

AWS EventBridge is a serverless event bus that makes it easy to connect applications using data from your own applications, integrated SaaS applications, and AWS services.

#### Key Features

- **Event routing**: Route events between services
- **Schema discovery**: Automatically discover event schemas
- **Custom events**: Send your own events
- **Partner integrations**: Connect with SaaS providers
- **Event replay**: Replay events for testing

#### Why it matters?

EventBridge matters because it enables event-driven architectures and decouples services. It makes it easy to build reactive applications that respond to changes in real-time.

#### What to learn?

- Event-driven architecture patterns
- Event schemas and formats
- Event routing and filtering
- SaaS integrations
- Error handling and retry logic

#### How it works?

1. Services publish events to EventBridge
2. EventBridge routes events based on rules
3. Target services receive and process events
4. EventBridge handles delivery and retries
5. You can monitor and audit all events

#### Common Use Cases

- Microservices communication
- Data processing pipelines
- Monitoring and alerting
- System integration
- Workflow automation
- Real-time analytics

#### Benefits

- **Decoupling**: Services don't need to know about each other
- **Scalability**: Handles high event volumes
- **Reliability**: Built-in retry and error handling
- **Flexibility**: Easy to add new event sources and targets
- **Cost-effective**: Pay only for events processed

#### Limitations

- **Event size limit**: Maximum 256KB per event
- **Throughput limits**: Rate limits on event publishing
- **Complexity**: Can become complex with many rules
- **Debugging**: Hard to trace event flows
- **Vendor lock-in**: Tied to AWS ecosystem

#### Integrate with other services

- **Lambda**: Function execution
- **SNS**: Notifications
- **SQS**: Message queuing
- **Step Functions**: Workflow orchestration
- **CloudWatch**: Monitoring
- **SaaS partners**: Third-party integrations

### **AWS Secrets Manager**

#### What is AWS Secrets Manager?

AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. It enables you to replace hardcoded credentials with API calls to retrieve secrets programmatically.

#### Key Features

- **Automatic rotation**: Rotate secrets automatically
- **Encryption**: Encrypt secrets at rest and in transit
- **Fine-grained access**: Control who can access secrets
- **Audit logging**: Track secret usage
- **Cross-region replication**: Replicate secrets across regions

#### Why it matters?

Secrets Manager matters because it centralizes secret management and improves security. It eliminates hardcoded credentials and provides automatic rotation, reducing security risks.

#### What to learn?

- Secret management best practices
- Encryption and security concepts
- IAM policies and permissions
- API integration patterns
- Monitoring and auditing

#### How it works?

1. You store secrets in Secrets Manager
2. Applications request secrets via API calls
3. Secrets Manager encrypts and stores secrets
4. IAM controls who can access secrets
5. Automatic rotation keeps secrets fresh

#### Common Use Cases

- Database credentials
- API keys and tokens
- SSH keys and certificates
- Third-party service credentials
- Application configuration secrets

#### Benefits

- **Security**: Centralized and encrypted secret storage
- **Compliance**: Audit trails and access controls
- **Automation**: Automatic secret rotation
- **Integration**: Easy API access
- **Scalability**: Handles many secrets and applications

#### Limitations

- **Cost**: Can be expensive for many secrets
- **API limits**: Rate limits on secret access
- **Complexity**: Requires proper IAM setup
- **Dependencies**: Applications must be updated to use it
- **Vendor lock-in**: Tied to AWS ecosystem

#### Integrate with other services

- **RDS**: Database credentials
- **Lambda**: Function secrets
- **ECS/EKS**: Container secrets
- **CloudFormation**: Infrastructure secrets
- **CloudWatch**: Monitoring and logging
- **IAM**: Access control

### **AWS IAM (Identity and Access Management)**

#### What is AWS IAM?

AWS IAM is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.

#### Key Features

- **Users**: Individual AWS accounts
- **Groups**: Collections of users
- **Roles**: Temporary credentials
- **Policies**: Permission documents
- **MFA**: Multi-factor authentication

#### Why it matters?

IAM matters because it's the foundation of AWS security. It controls who can access what resources and ensures that only authorized users and services can perform actions.

#### What to learn?

- Identity and access management concepts
- Policy writing and best practices
- Role-based access control
- Multi-factor authentication
- Security auditing and compliance

#### How it works?

1. You create users, groups, and roles
2. You attach policies that define permissions
3. Users authenticate with credentials
4. IAM checks permissions before allowing actions
5. All actions are logged for auditing

#### Common Use Cases

- User access management
- Service-to-service authentication
- Cross-account access
- Temporary access for contractors
- Compliance and auditing

#### Benefits

- **Security**: Fine-grained access control
- **Compliance**: Audit trails and logging
- **Flexibility**: Granular permission management
- **Integration**: Works with all AWS services
- **Cost-effective**: No additional charges

#### Limitations

- **Complexity**: Can become complex with many policies
- **Learning curve**: Requires understanding of AWS services
- **Policy limits**: Maximum policy size and complexity
- **Performance**: Policy evaluation can impact performance
- **Debugging**: Hard to troubleshoot permission issues

#### Integrate with other services

- **All AWS services**: Access control
- **CloudTrail**: Audit logging
- **CloudWatch**: Monitoring
- **STS**: Temporary credentials
- **Organizations**: Multi-account management
- **Directory services**: Enterprise integration

### **AWS MSK (Managed Streaming for Apache Kafka)**

#### What is AWS MSK?

Amazon MSK is a fully managed service that makes it easy for you to build and run applications that use Apache Kafka to process streaming data.

#### Key Features

- **Fully managed**: No infrastructure management
- **High availability**: Multi-AZ deployment
- **Security**: Encryption in transit and at rest
- **Monitoring**: CloudWatch integration
- **Compatibility**: 100% compatible with Apache Kafka

#### Why it matters?

MSK matters because it provides a fully managed Kafka service, eliminating the operational overhead of running Kafka clusters. It's essential for real-time data streaming and event-driven architectures.

#### What to learn?

- Apache Kafka concepts
- Streaming data processing
- Event-driven architecture
- Data serialization formats
- Monitoring and troubleshooting

#### How it works?

1. You create a Kafka cluster in MSK
2. Applications produce messages to topics
3. Other applications consume messages from topics
4. MSK handles replication and fault tolerance
5. You monitor and manage through AWS console

#### Common Use Cases

- Real-time analytics
- Event sourcing
- Microservices communication
- Data integration
- Log aggregation
- Stream processing

#### Benefits

- **Fully managed**: No operational overhead
- **Scalable**: Handles high throughput
- **Reliable**: Built-in fault tolerance
- **Secure**: Encryption and access controls
- **Compatible**: Works with existing Kafka tools

#### Limitations

- **Cost**: Can be expensive for small workloads
- **Complexity**: Requires Kafka knowledge
- **Vendor lock-in**: Tied to AWS ecosystem
- **Performance**: May have latency compared to self-managed
- **Customization**: Limited configuration options

#### Integrate with other services

- **Lambda**: Stream processing
- **Kinesis**: Data streaming
- **S3**: Data lake storage
- **DynamoDB**: Real-time databases
- **CloudWatch**: Monitoring
- **VPC**: Networking and security

### **AWS S3 (Simple Storage Service)**

#### What is AWS S3?

Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. It's designed to store and retrieve any amount of data from anywhere on the web.

#### Key Features

- **Durability**: 99.999999999% (11 9's)
- **Availability**: 99.99% uptime
- **Scalability**: Unlimited storage
- **Security**: Encryption and access controls
- **Performance**: Low latency and high throughput

#### Why it matters?

S3 matters because it's the foundation of cloud storage and data lakes. It's used by virtually every AWS service and is essential for storing, backing up, and archiving data.

#### What to learn?

- Object storage concepts
- Data lifecycle management
- Security and access controls
- Data transfer and migration
- Cost optimization strategies

#### How it works?

1. You create buckets to store objects
2. You upload files as objects with metadata
3. S3 stores objects across multiple facilities
4. You can access objects via HTTP/HTTPS
5. S3 provides durability and availability guarantees

#### Common Use Cases

- Data backup and archiving
- Static website hosting
- Data lakes and analytics
- Application data storage
- Content distribution
- Disaster recovery

#### Benefits

- **Durability**: Extremely reliable data storage
- **Scalability**: Unlimited storage capacity
- **Security**: Multiple encryption options
- **Performance**: Fast data access
- **Cost-effective**: Multiple storage classes

#### Limitations

- **Consistency**: Eventual consistency for some operations
- **Cost**: Can be expensive for frequent access
- **Complexity**: Many features and options
- **Bandwidth**: Data transfer costs
- **Vendor lock-in**: Tied to AWS ecosystem

#### Integrate with other services

- **CloudFront**: Content delivery
- **Lambda**: Serverless processing
- **Glacier**: Long-term archiving
- **Athena**: Data analytics
- **Redshift**: Data warehousing
- **All AWS services**: Data storage

### **AWS ECR (Elastic Container Registry)**

#### What is AWS ECR?

Amazon ECR is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.

#### Key Features

- **Docker compatibility**: Works with Docker CLI
- **Image scanning**: Vulnerability scanning
- **Lifecycle policies**: Automatic image cleanup
- **Encryption**: Encrypt images at rest
- **Cross-region replication**: Replicate across regions

#### Why it matters?

ECR matters because it provides a secure, scalable place to store container images. It's essential for containerized applications and integrates seamlessly with other AWS container services.

#### What to learn?

- Docker and container concepts
- Image security and scanning
- Lifecycle management
- CI/CD integration
- Multi-region deployments

#### How it works?

1. You build Docker images locally
2. You push images to ECR repositories
3. ECR stores and encrypts images
4. You pull images to run containers
5. ECR handles security and lifecycle management

#### Common Use Cases

- Container image storage
- CI/CD pipelines
- Multi-environment deployments
- Image security scanning
- Cross-region replication

#### Benefits

- **Security**: Encrypted and scanned images
- **Integration**: Works with ECS, EKS, Lambda
- **Scalability**: Handles any number of images
- **Cost-effective**: Pay only for storage used
- **Reliability**: High availability and durability

#### Limitations

- **Vendor lock-in**: Tied to AWS ecosystem
- **Cost**: Can be expensive for many images
- **Complexity**: Requires Docker knowledge
- **Bandwidth**: Data transfer costs
- **Dependencies**: Requires other AWS services

#### Integrate with other services

- **ECS**: Container orchestration
- **EKS**: Kubernetes on AWS
- **Lambda**: Serverless containers
- **CodeBuild**: CI/CD pipelines
- **CloudWatch**: Monitoring
- **IAM**: Access control

### **AWS S3 Sink Connector**

#### What is AWS S3 Sink Connector?

The S3 Sink Connector is a Kafka Connect connector that exports data from Apache Kafka topics to Amazon S3. It reads data from Kafka and writes it to S3 in various formats.

#### Key Features

- **Multiple formats**: JSON, Avro, Parquet
- **Partitioning**: Automatic partitioning by time
- **Compression**: Gzip, Snappy, LZ4
- **Schema evolution**: Handle schema changes
- **Exactly-once delivery**: Guarantee data consistency

#### Why it matters?

S3 Sink Connector matters because it enables real-time data pipelines from Kafka to S3. This is essential for building data lakes and analytics platforms.

#### What to learn?

- Kafka Connect concepts
- Data serialization formats
- S3 storage patterns
- Schema management
- Data pipeline monitoring

#### How it works?

1. Kafka Connect runs the S3 Sink Connector
2. Connector reads messages from Kafka topics
3. Data is formatted and partitioned
4. Formatted data is written to S3
5. Connector handles errors and retries

#### Common Use Cases

- Real-time data lakes
- Analytics data pipelines
- Data archiving
- ETL processes
- Data warehousing

#### Benefits

- **Real-time**: Continuous data streaming
- **Reliable**: Exactly-once delivery guarantees
- **Scalable**: Handles high throughput
- **Flexible**: Multiple data formats
- **Cost-effective**: Efficient S3 storage

#### Limitations

- **Complexity**: Requires Kafka knowledge
- **Dependencies**: Needs Kafka Connect
- **Cost**: S3 storage and transfer costs
- **Latency**: Batch processing delays
- **Vendor lock-in**: Tied to AWS ecosystem

#### Integrate with other services

- **Kafka**: Message streaming
- **S3**: Data storage
- **Athena**: Data analytics
- **Redshift**: Data warehousing
- **Glue**: ETL processing
- **CloudWatch**: Monitoring

### **AWS EventBridge Sink Connector**

#### What is AWS EventBridge Sink Connector?

The EventBridge Sink Connector sends data from Kafka topics to Amazon EventBridge. It enables event-driven architectures by routing Kafka messages to EventBridge.

#### Key Features

- **Event routing**: Send Kafka messages to EventBridge
- **Schema mapping**: Transform message formats
- **Error handling**: Dead letter queues
- **Monitoring**: CloudWatch integration
- **Scalability**: Handle high message volumes

#### Why it matters?

EventBridge Sink Connector matters because it bridges Kafka and EventBridge, enabling event-driven architectures. It allows you to route streaming data to various AWS services.

#### What to learn?

- Event-driven architecture
- Message transformation
- Error handling patterns
- Event routing strategies
- Monitoring and debugging

#### How it works?

1. Kafka Connect runs the EventBridge Sink Connector
2. Connector reads messages from Kafka topics
3. Messages are transformed to EventBridge format
4. Events are sent to EventBridge
5. EventBridge routes events to target services

#### Common Use Cases

- Event-driven microservices
- Real-time notifications
- Workflow automation
- System integration
- Monitoring and alerting

#### Benefits

- **Decoupling**: Separate Kafka from downstream services
- **Flexibility**: Route events to multiple targets
- **Reliability**: Built-in error handling
- **Scalability**: Handle high event volumes
- **Integration**: Connect with many AWS services

#### Limitations

- **Complexity**: Requires understanding both Kafka and EventBridge
- **Dependencies**: Needs Kafka Connect
- **Cost**: EventBridge and Kafka costs
- **Latency**: Additional processing layer
- **Vendor lock-in**: Tied to AWS ecosystem

#### Integrate with other services

- **Kafka**: Message streaming
- **EventBridge**: Event routing
- **Lambda**: Function execution
- **SNS**: Notifications
- **SQS**: Message queuing
- **CloudWatch**: Monitoring

### **AWS Snowflake Sink Connector**

#### What is AWS Snowflake Sink Connector?

The Snowflake Sink Connector exports data from Kafka topics to Snowflake data warehouse. It enables real-time data streaming from Kafka to Snowflake for analytics.

#### Key Features

- **Automatic table creation**: Creates tables automatically
- **Schema evolution**: Handles schema changes
- **Error handling**: Dead letter queue support
- **Performance**: Optimized for high throughput
- **Security**: Encrypted connections

#### Why it matters?

Snowflake Sink Connector matters because it enables real-time data analytics. It allows you to stream data from Kafka directly to Snowflake for immediate analysis and reporting.

#### What to learn?

- Snowflake data warehouse concepts
- Kafka Connect architecture
- Data serialization formats
- Schema management
- Performance optimization

#### How it works?

1. Kafka Connect runs the Snowflake Sink Connector
2. Connector reads messages from Kafka topics
3. Data is transformed to Snowflake format
4. Data is loaded into Snowflake tables
5. Connector handles errors and retries

#### Common Use Cases

- Real-time analytics
- Data warehousing
- Business intelligence
- Machine learning pipelines
- Operational reporting

#### Benefits

- **Real-time**: Continuous data streaming
- **Scalable**: Handle high data volumes
- **Reliable**: Error handling and retries
- **Flexible**: Schema evolution support
- **Performance**: Optimized for Snowflake

#### Limitations

- **Complexity**: Requires Kafka and Snowflake knowledge
- **Dependencies**: Needs Kafka Connect
- **Cost**: Snowflake and Kafka costs
- **Latency**: Batch processing delays
- **Vendor lock-in**: Tied to specific vendors

#### Integrate with other services

- **Kafka**: Message streaming
- **Snowflake**: Data warehouse
- **CloudWatch**: Monitoring
- **IAM**: Access control
- **VPC**: Networking
- **Secrets Manager**: Credentials
    `
  },
  'SPRING-BOOT': {
    title: 'Spring Boot',
    description: 'Java framework for building production-ready applications',
    content: `
# Spring Boot

Spring Boot is a Java-based framework used to create microservices and web applications. It simplifies the development of Spring applications by providing auto-configuration and starter dependencies.

  `
  },
  'NODEJS': {
    title: 'Node.js',
    description: 'JavaScript runtime for building scalable network applications',
    content: `
# Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side and build scalable network applications.

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It's designed to build scalable network applications.

### Key Features

- **Event-driven**: Asynchronous, non-blocking I/O
- **Single-threaded**: Event loop handles concurrency
- **Cross-platform**: Runs on Windows, macOS, Linux
- **NPM**: Largest package ecosystem
- **Fast**: V8 engine performance

## Getting Started

### Installation
\`\`\`bash
# Using Node Version Manager (nvm)
curl -o- https://raw.githubusercontent.com/nvm/v0.39.0/install.sh | bash
nvm install node
nvm use node

# Direct installation
# Download from https://nodejs.org/
\`\`\`

### First Application
\`\`\`javascript
// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## Core Concepts

### Event Loop
The event loop is the heart of Node.js. It handles asynchronous operations efficiently.

\`\`\`javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Output:
// Start
// End
// Promise
// Timeout
\`\`\`

### Modules
\`\`\`javascript
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// app.js
const { add } = require('./math');
console.log(add(2, 3)); // 5
\`\`\`

### ES6 Modules
\`\`\`javascript
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
\`\`\`

## Web Development

### Express.js
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

### Middleware
\`\`\`javascript
// Logging middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path}\`);
  next();
});

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
\`\`\`

### Routing
\`\`\`javascript
// User routes
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  const user = req.body;
  // Save user logic
  res.json({ message: 'User created' });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ user: { id: userId } });
});
\`\`\`

## Database Integration

### MongoDB with Mongoose
\`\`\`javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb');

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create model
const User = mongoose.model('User', userSchema);

// Create user
const user = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

user.save().then(() => {
  console.log('User saved');
});
\`\`\`

### PostgreSQL with Sequelize
\`\`\`javascript
const { Sequelize, DataTypes } = require('sequelize');

// Connect to database
const sequelize = new Sequelize('postgres://user:password@localhost:5432/mydb');

// Define model
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  age: DataTypes.INTEGER
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
});
\`\`\`

## Asynchronous Programming

### Promises
\`\`\`javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

### Async/Await
\`\`\`javascript
async function fetchData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

### File System
\`\`\`javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Testing

### Jest
\`\`\`javascript
// math.test.js
const { add, subtract } = require('./math');

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});
\`\`\`

### Supertest
\`\`\`javascript
const request = require('supertest');
const app = require('./app');

describe('GET /users', () => {
  test('responds with json', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200)
      .expect('Content-Type', /json/);
    
    expect(response.body).toHaveProperty('users');
  });
});
\`\`\`

## Package Management

### NPM
\`\`\`bash
# Initialize package.json
npm init

# Install dependencies
npm install express

# Install dev dependencies
npm install --save-dev jest

# Run scripts
npm start
npm test
npm run build
\`\`\`

### Package.json
\`\`\`json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "test": "jest",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "jest": "^28.0.0",
    "nodemon": "^2.0.0"
  }
}
\`\`\`

## Performance

### Clustering
\`\`\`javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker process
  require('./app');
}
\`\`\`

### Caching
\`\`\`javascript
const redis = require('redis');
const client = redis.createClient();

// Cache middleware
function cache(req, res, next) {
  const key = req.originalUrl;
  
  client.get(key, (err, data) => {
    if (data) {
      res.json(JSON.parse(data));
    } else {
      next();
    }
  });
}
\`\`\`

## Security

### Helmet.js
\`\`\`javascript
const helmet = require('helmet');
app.use(helmet());
\`\`\`

### JWT Authentication
\`\`\`javascript
const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign({ userId: 123 }, 'secret', { expiresIn: '1h' });

// Verify token
const decoded = jwt.verify(token, 'secret');
\`\`\`

### Input Validation
\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(0).max(120)
});

app.post('/users', (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  // Process valid data
});
\`\`\`

## Deployment

### Docker
\`\`\`dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### PM2
\`\`\`bash
# Install PM2
npm install -g pm2

# Start application
pm2 start app.js

# Monitor
pm2 monit

# Restart
pm2 restart app
\`\`\`

## Best Practices

### Error Handling
\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

### Logging
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
\`\`\`

### Environment Variables
\`\`\`javascript
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;
\`\`\`

## Future Trends

- **Deno**: Modern JavaScript runtime
- **Bun**: Fast JavaScript runtime
- **WebAssembly**: High-performance computing
- **Edge Computing**: Serverless functions
    `
  },
  'Core JAVA': {
    title: 'Core JAVA',
    description: 'Java programming language',
    content: `
    `
  },
  'Hibernate': {
    title: 'Hibernate',
    description: 'Java persistence framework',
    content: `
    `
  },
  'REST Services': {
    title: 'REST Services',
    description: 'Representational state transfer services',
    content: `
    `
  },
  'API Development': {
    title: 'REST Services & API Development',
    description: 'REST Services & API Development',
    content: `
# REST Services & API Development


## **What is API?**

API – Application Programming Interface - It’s a way of making request into a component. Here the component means Model, Views, Controllers, Services, Plugins and Data Access Objects …etc. So a component that can be reused across multiple systems and applications can be packaged and distributed as an API.

## **API Lifecycle**

Full API lifecycle management is the process of overseeing an API from its creation to retirement across its full life span. This includes everything from designing, publishing, documenting, securing, and analyzing APIs. An effective API strategy must include an API management solution that makes APIs easily discoverable and reusable, and ensures that they are properly governed and secured.

> The 3 API lifecycle stages

1. Design
2. Implementation
3. Management

### ***Design***

The design phase of the API lifecycle is where the API is defined and documented. This includes the API endpoints, request/response formats, and security requirements.

### ***Implementation***

The implementation phase of the API lifecycle is where the API is created and deployed. This includes the API endpoints, request/response formats, and security requirements.

### ***Management***

The management phase of the API lifecycle is where the API is monitored and managed. This includes the API endpoints, request/response formats, and security requirements.

  `
  },
  'TYPESCRIPT': {
    title: 'TypeScript',
    description: 'Strongly typed programming language that builds on JavaScript',
    content: `
# TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's developed and maintained by Microsoft and adds static type definitions to JavaScript.

## What is TypeScript?


  `
  },
  'REACT': {
    title: 'React',
    description: 'JavaScript library for building user interfaces',
    content: `
# React

React is a JavaScript library for building user interfaces, especially web applications. It was created by Facebook and is now maintained by Meta. React makes it easy to create interactive UIs by breaking them into small, reusable pieces called components.

## What is React?

    `
  }
}

export default navigationTopics
