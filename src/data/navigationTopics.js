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
    title: 'API Development',
    description: 'API development',
    content: `
    `
  },
  'TYPESCRIPT': {
    title: 'TypeScript',
    description: 'Strongly typed programming language that builds on JavaScript',
    content: `
# TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It's developed and maintained by Microsoft and adds static type definitions to JavaScript.

## What is TypeScript?

TypeScript is a superset of JavaScript that compiles to plain JavaScript. It adds optional static type checking, classes, interfaces, and other features to help developers build large-scale applications.

### Key Benefits

- **Static Type Checking**: Catch errors at compile time, not runtime
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Improved Code Quality**: Self-documenting code with type annotations
- **Modern JavaScript Features**: Access to latest ECMAScript features
- **Gradual Adoption**: Can be adopted incrementally in existing JavaScript projects

## Core Concepts

### Basic Types

\`\`\`typescript
// Primitive types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// Objects
let person: { name: string; age: number } = {
  name: "John",
  age: 30
};
\`\`\`

### Interfaces

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

interface Employee extends User {
  department: string;
  salary: number;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};
\`\`\`

### Classes

\`\`\`typescript
class Animal {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  public speak(): string {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  public speak(): string {
    return \`\${this.name} barks\`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // "Buddy barks"
\`\`\`

### Generics

\`\`\`typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
let number = identity<number>(42);

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<User> = {
  data: user,
  status: 200,
  message: "Success"
};
\`\`\`

## Advanced Features

### Union and Intersection Types

\`\`\`typescript
// Union types
type Status = "loading" | "success" | "error";
type ID = string | number;

// Intersection types
type Employee = User & {
  employeeId: string;
  department: string;
};
\`\`\`

### Type Guards

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
  return value.toString();
}
\`\`\`

### Enums

\`\`\`typescript
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

enum Status {
  Pending,
  Approved,
  Rejected
}

const favoriteColor: Color = Color.Blue;
const currentStatus: Status = Status.Pending;
\`\`\`

## Configuration

### tsconfig.json

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

## Best Practices

### 1. Use Strict Mode
Enable strict type checking in tsconfig.json:
\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

### 2. Prefer Interfaces over Types
Use interfaces for object shapes, types for unions and primitives:
\`\`\`typescript
// Good
interface User {
  name: string;
  age: number;
}

// Good
type Status = "active" | "inactive";
\`\`\`

### 3. Use Type Assertions Sparingly
\`\`\`typescript
// Avoid
const element = document.getElementById("myDiv") as HTMLDivElement;

// Better
const element = document.getElementById("myDiv");
if (element instanceof HTMLDivElement) {
  // Use element safely
}
\`\`\`

### 4. Leverage Utility Types
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Create a type without password
type PublicUser = Omit<User, "password">;

// Make all properties optional
type PartialUser = Partial<User>;

// Pick specific properties
type UserSummary = Pick<User, "id" | "name">;
\`\`\`

## Integration with Frameworks

### React with TypeScript

\`\`\`typescript
import React, { useState, useEffect } from 'react';

interface Props {
  title: string;
  initialCount?: number;
}

const Counter: React.FC<Props> = ({ title, initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    document.title = \`\${title}: \${count}\`;
  }, [title, count]);

  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
\`\`\`

### Node.js with TypeScript

\`\`\`typescript
import express, { Request, Response } from 'express';

interface User {
  id: number;
  name: string;
  email: string;
}

const app = express();
app.use(express.json());

app.get('/users/:id', (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);
  // Handle user retrieval
  res.json({ id: userId, name: "John Doe" });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## Common Patterns

### Error Handling

\`\`\`typescript
class CustomError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code?: string
  ) {
    super(message);
    this.name = 'CustomError';
  }
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new CustomError('Division by zero', 400, 'DIVISION_BY_ZERO');
  }
  return a / b;
}
\`\`\`

### API Response Types

\`\`\`typescript
interface ApiError {
  message: string;
  code: string;
  statusCode: number;
}

type ApiResult<T> = 
  | { success: true; data: T }
  | { success: false; error: ApiError };

async function fetchUser(id: number): Promise<ApiResult<User>> {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const user = await response.json();
    return { success: true, data: user };
  } catch (error) {
    return {
      success: false,
      error: {
        message: error.message,
        code: 'FETCH_ERROR',
        statusCode: 500
      }
    };
  }
}
\`\`\`

## Migration from JavaScript

### 1. Rename Files
Change \`.js\` files to \`.ts\` or \`.tsx\` for React components.

### 2. Add Type Annotations Gradually
Start with function parameters and return types:
\`\`\`typescript
// Before
function greet(name) {
  return \`Hello, \${name}!\`;
}

// After
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

### 3. Use \`any\` Sparingly
Only use \`any\` when absolutely necessary, prefer \`unknown\`:
\`\`\`typescript
// Avoid
function processData(data: any) {
  return data.someProperty;
}

// Better
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null) {
    return (data as { someProperty: unknown }).someProperty;
  }
  return null;
}
\`\`\`

## Tools and Ecosystem

### Essential Tools
- **TypeScript Compiler (tsc)**: Official compiler
- **ts-node**: Run TypeScript directly
- **ts-loader**: Webpack loader
- **@types packages**: Type definitions for JavaScript libraries

### Popular Libraries
- **React**: \`@types/react\`
- **Express**: \`@types/express\`
- **Lodash**: \`@types/lodash\`
- **Jest**: \`@types/jest\`

### IDE Support
- **VS Code**: Excellent built-in support
- **WebStorm**: Full TypeScript integration
- **Sublime Text**: TypeScript plugin available

## Performance Considerations

### Compilation
- TypeScript adds no runtime overhead
- Compilation can be slow for large projects
- Use \`--incremental\` flag for faster builds

### Bundle Size
- Type information is stripped during compilation
- No impact on final bundle size
- Source maps available for debugging

TypeScript is an essential tool for modern JavaScript development, providing the type safety and developer experience needed for building maintainable, scalable applications.
    `
  },
  'REACT': {
    title: 'React',
    description: 'JavaScript library for building user interfaces',
    content: `
# React

React is a JavaScript library for building user interfaces, especially web applications. It was created by Facebook and is now maintained by Meta. React makes it easy to create interactive UIs by breaking them into small, reusable pieces called components.

## What is React?

React is a library that helps you build websites and web applications. Instead of writing all your code in one big file, React lets you break your website into small, reusable pieces called components. Each component handles one part of your website, making it easier to build and maintain.

### Why Use React?

- **Reusable Components**: Write once, use many times
- **Virtual DOM**: Makes your app faster by updating only what changed
- **Easy to Learn**: Simple concepts that build on each other
- **Huge Community**: Lots of help and resources available
- **Works Everywhere**: Can build web apps, mobile apps, and desktop apps

## Core Concepts

### Components

Components are like building blocks for your website. Think of them as LEGO pieces - you can combine them to build something bigger.

\`\`\`jsx
// Simple component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}
\`\`\`

### JSX

JSX is a special way to write HTML inside JavaScript. It looks like HTML but it's actually JavaScript.

\`\`\`jsx
// This is JSX
const element = <h1>Hello, {name}!</h1>;

// It's the same as writing:
const element = React.createElement('h1', null, 'Hello, ', name, '!');
\`\`\`

### Props

Props are like parameters you pass to components. They let you customize how components look and behave.

\`\`\`jsx
// Component that accepts props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component with props
function App() {
  return <Greeting name="Alice" />;
}
\`\`\`

### State

State is data that can change over time. When state changes, React automatically updates the part of your website that uses that data.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Essential Hooks

### useState Hook

useState lets you add state to functional components.

\`\`\`jsx
import { useState } from 'react';

function Example() {
  // Declare a state variable
  const [name, setName] = useState('John');

  return (
    <div>
      <p>Your name is: {name}</p>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
\`\`\`

### useEffect Hook

useEffect lets you perform side effects in functional components. Side effects are things like fetching data or updating the document title.

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This runs after the component mounts
    fetch(\`/api/users/\${userId}\`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]); // Only run when userId changes

  if (!user) return <div>Loading...</div>;

  return <div>Hello, {user.name}!</div>;
}
\`\`\`

### useContext Hook

useContext lets you share data between components without passing props down through every level.

\`\`\`jsx
import { createContext, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      style={{ 
        background: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

## Event Handling

React uses camelCase for event names and passes functions as event handlers.

\`\`\`jsx
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'blue';
  };

  return (
    <button 
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    >
      Click me
    </button>
  );
}
\`\`\`

## Conditional Rendering

You can show different content based on conditions.

\`\`\`jsx
function Greeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>Welcome back, {name}!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

// Or using the ternary operator
function Greeting({ isLoggedIn, name }) {
  return (
    <h1>
      {isLoggedIn ? \`Welcome back, \${name}!\` : 'Please log in.'}
    </h1>
  );
}
\`\`\`

## Lists and Keys

When rendering lists, React needs a unique key for each item to track changes efficiently.

\`\`\`jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

## Forms

React forms are controlled components where form data is handled by React state.

\`\`\`jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <button type="submit">Send</button>
    </form>
  );
}
\`\`\`

## Component Lifecycle

### Class Components (Older Way)

\`\`\`jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // Runs after component is added to DOM
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    // Runs before component is removed from DOM
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
\`\`\`

### Functional Components with Hooks (Modern Way)

\`\`\`jsx
function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Runs after component mounts
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup function runs before component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this runs once

  return <div>{date.toLocaleTimeString()}</div>;
}
\`\`\`

## Styling Components

### CSS Classes

\`\`\`jsx
// In your CSS file
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}

// In your component
function Button() {
  return <button className="button">Click me</button>;
}
\`\`\`

### Inline Styles

\`\`\`jsx
function Button() {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px'
  };

  return <button style={buttonStyle}>Click me</button>;
}
\`\`\`

### CSS Modules

\`\`\`jsx
// Button.module.css
.button {
  background-color: blue;
  color: white;
}

// Button.jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click me</button>;
}
\`\`\`

## Common Patterns

### Higher-Order Components (HOC)

HOCs are functions that take a component and return a new component with additional functionality.

\`\`\`jsx
function withLoading(WrappedComponent) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

// Usage
const UserProfileWithLoading = withLoading(UserProfile);
\`\`\`

### Custom Hooks

Custom hooks let you extract component logic into reusable functions.

\`\`\`jsx
// Custom hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Using the custom hook
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

## Performance Optimization

### React.memo

Prevents unnecessary re-renders by memoizing the component.

\`\`\`jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  // Expensive calculations here
  return <div>{data}</div>;
});
\`\`\`

### useMemo

Memoizes expensive calculations.

\`\`\`jsx
function ExpensiveCalculation({ items }) {
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>Total: {expensiveValue}</div>;
}
\`\`\`

### useCallback

Memoizes functions to prevent unnecessary re-renders.

\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Child onClick={handleClick} />
    </div>
  );
}
\`\`\`

## Getting Started

### 1. Create a New React App

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

### 2. Basic Project Structure

\`\`\`
my-app/
  public/
    index.html
  src/
    components/
      Header.js
      Footer.js
    App.js
    index.js
  package.json
\`\`\`

### 3. Your First Component

\`\`\`jsx
// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Welcome to your first React app.</p>
    </div>
  );
}

export default App;
\`\`\`

## Best Practices

### 1. Keep Components Small
Break large components into smaller, focused components.

### 2. Use Descriptive Names
\`\`\`jsx
// Good
function UserProfileCard() { ... }

// Bad
function Card() { ... }
\`\`\`

### 3. Extract Logic into Custom Hooks
\`\`\`jsx
// Good
function useUserData(userId) {
  const [user, setUser] = useState(null);
  // ... logic
  return user;
}
\`\`\`

### 4. Use PropTypes or TypeScript
\`\`\`jsx
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
\`\`\`

### 5. Handle Errors Gracefully
\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
\`\`\`

## Common Mistakes to Avoid

### 1. Don't Mutate State Directly
\`\`\`jsx
// Wrong
this.state.count = this.state.count + 1;

// Correct
this.setState({ count: this.state.count + 1 });
// Or with hooks
setCount(count + 1);
\`\`\`

### 2. Don't Forget Keys in Lists
\`\`\`jsx
// Wrong
{todos.map(todo => <li>{todo.text}</li>)}

// Correct
{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
\`\`\`

### 3. Don't Call Hooks in Loops or Conditions
\`\`\`jsx
// Wrong
if (condition) {
  const [state, setState] = useState(0);
}

// Correct
const [state, setState] = useState(0);
if (condition) {
  // Use state here
}
\`\`\`

React makes building user interfaces fun and efficient. Start with simple components and gradually add more complex features as you learn!
    `
  }
}

export default navigationTopics
