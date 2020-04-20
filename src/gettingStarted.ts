import { delimeterMsg, logF, logToHTML } from "./utils";

function whatIsAWS() {
  logToHTML('' +
    `Amazom Web ervices (AWS) is a collection of cloud services that can work together or independently to power web apps.
    Servers in data senters around the globe can be used to run web apps or for cloud computing.

    The key benefits of using AWS are:
    - Scaling, security and maintance is done for you
    - pay as you use
    - deploy globally in preferred geographic areas
    We can check the worldwide regions health status by visiting https://status.aws.amazon.com/

    The AWS services can be connected using VPC (Virtual Private Cloud) there they all know the ip addresses of each other.
    The main competitors of AWS are Microsoft Azure, GoogLe Cloud and Heroku.
    `);
}

function AWSCoreServices() {
  logToHTML('' +
    `The core services of AWS are:
    - Elastic Cloud Computing (EC2) - A platform for running scalable applications and heavy computing tasks. Basic EC2 block is an instance (a virtual server).
    We can create instances from big image pool, with dirrerent os and installed applications (e.g. ubuntu + java image).
    Security permissions and ports access for an EC2 instance can be controlled using Security Groups.
    - Elastic Block Storage (EBS) - provides disk storage for EC2 apps.
    - Simple Storage Service (S3) - storage for static files, used by other services. Max file size is 5tb. In S3, works with buckets.
    Buckets are containers (folders) for static files a.k.a. objects. For example, app versions are stores in S3.
    - Relational Database Service (RDS) - collection of cloud relational databases to work with, like MySql or SQLServer (a.k.a Managed Databases).
    - Route53 - a routing solution for managing the DNS needs inside or outide the AWS.
    `);
}

function AWSExtendedServices() {
  logToHTML('' +
    `The extended services of AWS are:
    - Elastic Beanstalk (ELB) - a dashboard that helps automating deployments to EC2, configurating different envs, load balancing, auto-scaling & more...
    - Lambda - executing code separately (a.k.a. serverless). Can be triggered from code. Great for small tasks like sending push notifications.
    - DynamoDB - NoSQL cloud database that supports both document and key-value approaches.
    - Virtual Private Cloud (VPC) - a solution for managing network security groups, ip addresses between services & controlling routing tables.
    - CloudWatch - a moniroting system that watches files, logs and checks metrics. It can even trigger alarms, when a certain conditions happen.
    - CloudFront - a CDN solution that workds with S3 and Route53
    `);
}

function AWSToolsForDeveloper() {
  logToHTML('' +
    `The tools a developer has got in order to manage the AWS are:
    - Elastic Beanstalk (ELB) - a dashboard that helps automating deployments to EC2
    `);
}

export default function gettingStarted() {
  delimeterMsg('GETTING STARTED');
  logF(whatIsAWS);
  logF(AWSCoreServices);
  logF(AWSExtendedServices);
  logF(AWSToolsForDeveloper);
}