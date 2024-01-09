# DietGoals

This is the frontend repo of the app, built with AWS services.

[Backend repo](https://github.com/thejwuscript/dietgoals-api)

## Architecture Overview

![diagram](https://github.com/thejwuscript/dietgoals/assets/88938117/43c6cd07-7d05-465f-8605-5a1883ecddda)

1. **Amazon CloudFront**: A content delivery network (CDN) that serves objects from S3 by caching frequently accessed content at edge locations, thereby reducing latency and data transfer costs.
2. **Amazon S3**: A highly scalable and secured object storage service.
3. **AWS** **Certificate Manager**: Provides TLS/SSL certificate for HTTPS connection.
4. **AWS IAM**: Manages access to AWS resources by creating policies and attaching them to IAM identities.
5. **DNS Hosting**: A service that points a custom domain name to an IP address or another domain name. 
6. **GitHub Actions**: A CI/CD platform that allows developers to automate build, test, and deployment tasks.
