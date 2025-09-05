// Detailed content for navigation menu topics
export const navigationTopics = {
  'KAFKA': {
    title: 'Apache Kafka',
    description: 'Distributed streaming platform for building real-time data pipelines',
    content: `
# Apache Kafka

Apache Kafka is a distributed streaming platform that enables you to build real-time data pipelines and streaming applications. It's designed to handle trillions of events per day.

## What is Kafka?

Kafka is a distributed event streaming platform capable of handling trillions of events per day. It was originally developed by LinkedIn and is now maintained by the Apache Software Foundation.

### Key Features

- **High Throughput**: Can handle millions of messages per second
- **Low Latency**: Sub-millisecond latency for real-time applications
- **Durability**: Messages are persisted to disk and replicated
- **Scalability**: Horizontally scalable across multiple servers
- **Fault Tolerance**: Built-in replication and failover mechanisms

## Core Concepts

### Topics and Partitions

- **Topics**: Categories or feeds to which records are published
- **Partitions**: Topics are split into partitions for parallel processing
- **Offset**: Unique identifier for each message within a partition

### Producers and Consumers

- **Producers**: Applications that publish data to topics
- **Consumers**: Applications that read data from topics
- **Consumer Groups**: Multiple consumers working together to process messages

## Use Cases

### Real-time Analytics
- Processing clickstream data
- Real-time recommendations
- Fraud detection

### Data Integration
- Microservices communication
- Event sourcing
- Log aggregation

### Stream Processing
- Real-time data transformation
- Complex event processing
- Data enrichment

## Best Practices

### Performance Optimization
- Tune batch size and linger time
- Use compression for large messages
- Optimize partition count

### Reliability
- Configure appropriate replication factor
- Use idempotent producers
- Implement proper error handling

### Monitoring
- Monitor consumer lag
- Track throughput metrics
- Set up alerts for failures

## Getting Started

### Installation
\`\`\`bash
# Download Kafka
wget https://downloads.apache.org/kafka/2.8.0/kafka_2.13-2.8.0.tgz
tar -xzf kafka_2.13-2.8.0.tgz
cd kafka_2.13-2.8.0
\`\`\`

### Basic Commands
\`\`\`bash
# Start Zookeeper
bin/zookeeper-server-start.sh config/zookeeper.properties

# Start Kafka
bin/kafka-server-start.sh config/server.properties

# Create a topic
bin/kafka-topics.sh --create --topic test-topic --bootstrap-server localhost:9092

# Produce messages
bin/kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092

# Consume messages
bin/kafka-console-consumer.sh --topic test-topic --from-beginning --bootstrap-server localhost:9092
\`\`\`

## Advanced Features

### Schema Registry
- Centralized schema management
- Schema evolution support
- Compatibility checking

### Kafka Connect
- Pre-built connectors for popular systems
- Distributed and fault-tolerant
- REST API for management

### Kafka Streams
- Java library for stream processing
- Stateful and stateless operations
- Exactly-once processing semantics

## Security

### Authentication
- SASL/PLAIN
- SASL/SCRAM
- SASL/GSSAPI (Kerberos)

### Authorization
- ACLs (Access Control Lists)
- Role-based access control
- Fine-grained permissions

### Encryption
- TLS/SSL for data in transit
- Encryption at rest
- End-to-end encryption

## Monitoring and Operations

### Key Metrics
- **Throughput**: Messages per second
- **Latency**: End-to-end processing time
- **Consumer Lag**: Delay in message processing
- **Disk Usage**: Storage utilization

### Tools
- Kafka Manager
- Confluent Control Center
- Prometheus + Grafana
- Custom monitoring solutions

## Troubleshooting

### Common Issues
- Consumer lag
- Partition imbalance
- Memory issues
- Network problems

### Debugging Steps
1. Check broker logs
2. Monitor consumer lag
3. Verify network connectivity
4. Check disk space
5. Review configuration

## Future Trends

- **Kafka on Kubernetes**: Container orchestration
- **Cloud-native**: Managed services
- **Stream Processing**: Real-time analytics
- **Event Sourcing**: CQRS patterns
    `
  },
  'TERRAFORM': {
    title: 'Terraform',
    description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure',
    content: `
# Terraform

Terraform is an open-source Infrastructure as Code (IaC) tool that enables you to define and provision data center infrastructure using a declarative configuration language.

## What is Terraform?

Terraform allows you to manage infrastructure through code, making it versionable, reusable, and shareable. It supports multiple cloud providers and on-premises systems.

### Key Benefits

- **Infrastructure as Code**: Version control for infrastructure
- **Multi-Cloud Support**: Works with AWS, Azure, GCP, and more
- **State Management**: Tracks infrastructure changes
- **Plan and Apply**: Preview changes before applying
- **Modularity**: Reusable components and modules

## Core Concepts

### Providers
- Cloud providers (AWS, Azure, GCP)
- Infrastructure services
- Software services
- Custom providers

### Resources
- Infrastructure components
- Configuration blocks
- Resource dependencies
- State management

### State
- Current infrastructure state
- Resource mapping
- Dependency tracking
- Change detection

## Configuration Language

### HCL (HashiCorp Configuration Language)
\`\`\`hcl
# Provider configuration
provider "aws" {
  region = "us-west-2"
}

# Resource definition
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t3.micro"
  
  tags = {
    Name = "WebServer"
  }
}
\`\`\`

### Variables
\`\`\`hcl
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}
\`\`\`

### Outputs
\`\`\`hcl
output "instance_ip" {
  description = "Public IP of the instance"
  value       = aws_instance.web.public_ip
}
\`\`\`

## Workflow

### 1. Write Configuration
- Define resources in .tf files
- Use variables for flexibility
- Organize with modules

### 2. Initialize
\`\`\`bash
terraform init
\`\`\`

### 3. Plan
\`\`\`bash
terraform plan
\`\`\`

### 4. Apply
\`\`\`bash
terraform apply
\`\`\`

### 5. Destroy
\`\`\`bash
terraform destroy
\`\`\`

## Modules

### Creating Modules
\`\`\`hcl
# modules/ec2/main.tf
resource "aws_instance" "this" {
  ami           = var.ami_id
  instance_type = var.instance_type
  
  tags = var.tags
}
\`\`\`

### Using Modules
\`\`\`hcl
module "web_server" {
  source = "./modules/ec2"
  
  ami_id        = "ami-0c55b159cbfafe1d0"
  instance_type = "t3.micro"
  tags = {
    Environment = "production"
  }
}
\`\`\`

## State Management

### Local State
- Stored in terraform.tfstate
- Single user scenarios
- Development environments

### Remote State
- Shared state storage
- Team collaboration
- Production environments

### State Backends
- S3 (AWS)
- Azure Storage
- Google Cloud Storage
- Terraform Cloud

## Best Practices

### File Organization
- Separate environments
- Use modules for reusability
- Version control everything
- Document configurations

### Security
- Use least privilege
- Encrypt sensitive data
- Use remote state
- Regular security audits

### Performance
- Use data sources
- Optimize resource dependencies
- Use targeted operations
- Parallel operations

## Advanced Features

### Workspaces
- Multiple environments
- State isolation
- Cost optimization
- Environment promotion

### Import
- Import existing resources
- Migrate from other tools
- Gradual adoption
- State reconciliation

### Provisioners
- Local-exec
- Remote-exec
- File
- Custom provisioners

## CI/CD Integration

### GitHub Actions
\`\`\`yaml
name: Terraform
on: [push]
jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: hashicorp/setup-terraform@v1
      - run: terraform init
      - run: terraform plan
      - run: terraform apply
\`\`\`

### GitLab CI
\`\`\`yaml
stages:
  - validate
  - plan
  - apply

validate:
  stage: validate
  script:
    - terraform init
    - terraform validate

plan:
  stage: plan
  script:
    - terraform plan
\`\`\`

## Troubleshooting

### Common Issues
- State lock errors
- Resource conflicts
- Provider issues
- Configuration errors

### Debugging
- Enable logging
- Use terraform console
- Check state file
- Review provider docs

## Security Considerations

### Sensitive Data
- Use variables
- Environment variables
- Secret management
- Encryption at rest

### Access Control
- IAM roles
- Service principals
- RBAC
- Audit logging

## Future Trends

- **Terraform Cloud**: Managed service
- **CDKTF**: Programming language support
- **Policy as Code**: Sentinel/OPA
- **Multi-cloud**: Cross-cloud deployments
    `
  },
  'AWS': {
    title: 'Amazon Web Services',
    description: 'Comprehensive cloud computing platform offering over 200 services',
    content: `
# Amazon Web Services (AWS)

Amazon Web Services is a comprehensive cloud computing platform that provides over 200 services for computing, storage, databases, networking, analytics, machine learning, and more.

## What is AWS?

AWS is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.

### Key Benefits

- **Scalability**: Auto-scaling based on demand
- **Reliability**: 99.99% uptime SLA
- **Security**: Enterprise-grade security
- **Cost-effective**: Pay-as-you-go pricing
- **Global Reach**: Multiple regions worldwide

## Core Services

### Compute Services

#### Amazon EC2 (Elastic Compute Cloud)
- Virtual servers in the cloud
- Multiple instance types
- Auto Scaling Groups
- Load Balancers

#### AWS Lambda
- Serverless compute
- Event-driven execution
- Pay per request
- Automatic scaling

#### Amazon ECS/EKS
- Container orchestration
- Docker support
- Kubernetes on AWS
- Managed services

### Storage Services

#### Amazon S3 (Simple Storage Service)
- Object storage
- 99.999999999% durability
- Multiple storage classes
- Lifecycle policies

#### Amazon EBS (Elastic Block Store)
- Block storage for EC2
- Persistent volumes
- Multiple volume types
- Snapshots

#### Amazon EFS (Elastic File System)
- Managed NFS
- Shared file system
- Multiple AZs
- Bursting performance

### Database Services

#### Amazon RDS
- Managed relational databases
- MySQL, PostgreSQL, Oracle
- Multi-AZ deployments
- Automated backups

#### Amazon DynamoDB
- NoSQL database
- Single-digit millisecond latency
- Auto-scaling
- Global tables

#### Amazon Redshift
- Data warehouse
- Petabyte-scale
- Columnar storage
- SQL analytics

### Networking Services

#### Amazon VPC
- Virtual private cloud
- Isolated network environment
- Subnets and route tables
- Security groups

#### Amazon CloudFront
- Content delivery network
- Global edge locations
- DDoS protection
- SSL/TLS termination

#### AWS Direct Connect
- Dedicated network connection
- Private connectivity
- Reduced bandwidth costs
- Consistent performance

## Security Services

### AWS IAM (Identity and Access Management)
- User and group management
- Role-based access control
- Multi-factor authentication
- Policy management

### AWS KMS (Key Management Service)
- Encryption key management
- Hardware security modules
- Key rotation
- Audit logging

### AWS WAF (Web Application Firewall)
- Web application protection
- SQL injection prevention
- XSS protection
- Rate limiting

## Monitoring and Logging

### Amazon CloudWatch
- Monitoring and observability
- Metrics and alarms
- Log aggregation
- Dashboards

### AWS X-Ray
- Distributed tracing
- Performance analysis
- Error tracking
- Service map

### AWS CloudTrail
- API call logging
- Audit trail
- Compliance
- Security analysis

## Machine Learning Services

### Amazon SageMaker
- End-to-end ML platform
- Jupyter notebooks
- Model training
- Model deployment

### Amazon Rekognition
- Image and video analysis
- Face recognition
- Object detection
- Content moderation

### Amazon Comprehend
- Natural language processing
- Sentiment analysis
- Entity recognition
- Language detection

## Best Practices

### Cost Optimization
- Use Reserved Instances
- Implement auto-scaling
- Monitor usage
- Use spot instances

### Security
- Enable MFA
- Use least privilege
- Encrypt data
- Regular audits

### Performance
- Use CDN
- Optimize databases
- Implement caching
- Monitor metrics

## Getting Started

### AWS Free Tier
- 12 months free
- Limited usage
- Learning resources
- Hands-on labs

### AWS CLI Setup
\`\`\`bash
# Install AWS CLI
pip install awscli

# Configure credentials
aws configure

# Test connection
aws s3 ls
\`\`\`

### Infrastructure as Code
\`\`\`yaml
# CloudFormation template
Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0c55b159cbfafe1d0
      InstanceType: t3.micro
\`\`\`

## Advanced Topics

### Multi-Region Architecture
- Disaster recovery
- Global applications
- Data replication
- Cross-region failover

### Serverless Architecture
- Lambda functions
- API Gateway
- Event-driven design
- Microservices

### Container Strategy
- ECS vs EKS
- Fargate
- Container registry
- Service mesh

## Cost Management

### AWS Cost Explorer
- Cost analysis
- Budget alerts
- Resource optimization
- Forecasting

### AWS Trusted Advisor
- Cost optimization
- Performance recommendations
- Security checks
- Fault tolerance

## Future Trends

- **Edge Computing**: AWS Wavelength
- **Quantum Computing**: Amazon Braket
- **5G Integration**: Private 5G
- **Sustainability**: Carbon footprint tracking
    `
  },
  'SPRING-BOOT': {
    title: 'Spring Boot',
    description: 'Java framework for building production-ready applications',
    content: `
# Spring Boot

Spring Boot is a Java-based framework used to create microservices and web applications. It simplifies the development of Spring applications by providing auto-configuration and starter dependencies.

## What is Spring Boot?

Spring Boot is an extension of the Spring framework that eliminates boilerplate configuration and provides a faster way to build production-ready applications.

### Key Features

- **Auto-configuration**: Automatic configuration based on dependencies
- **Starter Dependencies**: Pre-configured dependency sets
- **Embedded Servers**: Tomcat, Jetty, Undertow
- **Production-ready**: Actuator, metrics, health checks
- **No XML**: Java-based configuration

## Getting Started

### Spring Initializr
Visit [start.spring.io](https://start.spring.io) to generate a new Spring Boot project.

### Maven Dependencies
\`\`\`xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.0</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
\`\`\`

### Gradle Dependencies
\`\`\`gradle
plugins {
    id 'org.springframework.boot' version '2.7.0'
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
}
\`\`\`

## Core Concepts

### Auto-configuration
Spring Boot automatically configures your application based on the dependencies you add.

\`\`\`java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
\`\`\`

### Starter Dependencies
- **spring-boot-starter-web**: Web applications
- **spring-boot-starter-data-jpa**: JPA/Hibernate
- **spring-boot-starter-security**: Spring Security
- **spring-boot-starter-test**: Testing

### Configuration Properties
\`\`\`java
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private String version;
    // getters and setters
}
\`\`\`

## Web Development

### REST Controllers
\`\`\`java
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}
\`\`\`

### Data Access
\`\`\`java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);
}
\`\`\`

### Service Layer
\`\`\`java
@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public User save(User user) {
        return userRepository.save(user);
    }
}
\`\`\`

## Configuration

### Application Properties
\`\`\`properties
# application.properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
\`\`\`

### YAML Configuration
\`\`\`yaml
# application.yml
server:
  port: 8080
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: password
  jpa:
    hibernate:
      ddl-auto: update
\`\`\`

## Testing

### Unit Testing
\`\`\`java
@SpringBootTest
class UserServiceTest {
    
    @Autowired
    private UserService userService;
    
    @Test
    void testSaveUser() {
        User user = new User("John", "john@example.com");
        User savedUser = userService.save(user);
        assertThat(savedUser.getId()).isNotNull();
    }
}
\`\`\`

### Integration Testing
\`\`\`java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase
class UserControllerIntegrationTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
    void testGetAllUsers() {
        ResponseEntity<List> response = restTemplate.getForEntity("/api/users", List.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}
\`\`\`

## Production Features

### Actuator
\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
\`\`\`

### Health Checks
\`\`\`java
@Component
public class CustomHealthIndicator implements HealthIndicator {
    
    @Override
    public Health health() {
        // Custom health check logic
        return Health.up().withDetail("custom", "OK").build();
    }
}
\`\`\`

### Metrics
\`\`\`java
@RestController
public class MetricsController {
    
    private final MeterRegistry meterRegistry;
    
    @GetMapping("/api/metrics")
    public String getMetrics() {
        Counter.builder("custom.counter")
            .register(meterRegistry)
            .increment();
        return "Metrics updated";
    }
}
\`\`\`

## Security

### Spring Security
\`\`\`java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic();
        return http.build();
    }
}
\`\`\`

### JWT Authentication
\`\`\`java
@Component
public class JwtTokenProvider {
    
    public String generateToken(UserDetails userDetails) {
        // JWT token generation logic
    }
    
    public boolean validateToken(String token) {
        // Token validation logic
    }
}
\`\`\`

## Microservices

### Service Discovery
\`\`\`java
@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
\`\`\`

### API Gateway
\`\`\`java
@SpringBootApplication
@EnableZuulProxy
public class ApiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}
\`\`\`

## Best Practices

### Project Structure
\`\`\`
src/main/java/com/example/
├── Application.java
├── controller/
├── service/
├── repository/
├── model/
└── config/
\`\`\`

### Error Handling
\`\`\`java
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse("USER_NOT_FOUND", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
}
\`\`\`

### Logging
\`\`\`java
@RestController
@Slf4j
public class UserController {
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        log.info("Fetching user with id: {}", id);
        return userService.findById(id);
    }
}
\`\`\`

## Deployment

### Docker
\`\`\`dockerfile
FROM openjdk:11-jre-slim
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
\`\`\`

### Kubernetes
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: spring-boot-app
  template:
    metadata:
      labels:
        app: spring-boot-app
    spec:
      containers:
      - name: app
        image: spring-boot-app:latest
        ports:
        - containerPort: 8080
\`\`\`

## Future Trends

- **Reactive Programming**: WebFlux
- **Native Compilation**: GraalVM
- **Cloud Native**: Spring Cloud
- **Observability**: Micrometer
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
  }
}

export default navigationTopics
