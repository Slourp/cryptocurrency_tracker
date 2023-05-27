# Cryptocurrency Tracker App 📊💱🚀

This is a React and Express.js application that tracks real-time cryptocurrency prices. It uses Docker for streamlined deployment. By following the instructions below, you can run the application on your local machine.

## Prerequisites

Before running this application, make sure you have the following installed:

- Docker and Docker Compose 🐳
- Node.js and npm 📦
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

## Initial Setup

1. Clone the Cryptocurrency Tracker project to your local machine:

```shell
git clone https://github.com/YourUsername/Cryptocurrency_Tracker.git
```

2. Run the application with Docker:

```shell
docker-compose up -d --build
```

## Configuration

To configure the application, follow these steps:

1. Create a file called .env in the root directory of the repository and set the following environment variables:

```shell
# Docker
# Network variables
NETWORK_NAME=dev

# Project variables
PROJECT_NAME=CRYPTO_TRACKER

# Service variables
NODE_VERSION=latest

# API variables
API_KEY=your_api_key
```

2. Modify the `docker-compose.yml` file to suit your needs. You can change the Node.js version, port mappings, environment variables, and other settings.

3. Run the following command to start the application:

```shell
docker-compose up -d --build 
```

4. Enter the Docker container for the project:

```shell
docker exec -it CRYPTO_TRACKER_NODE bash
```

5. Run the initialization script `./init.sh`. If Node.js is not installed, it will install the LTS version:

```shell
./init.sh
```

6. Install Node.js and Express.js dependencies:

```shell
npm install
```

## Accessing the Application

Once the application is up and running, you can access it on your local machine at http://localhost:3000.

For further details, like project overview, structure, dependencies, usage examples, troubleshooting, contributing, and licensing, please refer to the corresponding sections of this document.

## Useful Commands 🛠️

During the operation of the application, you might find the following commands useful:

### Refreshing Cryptocurrency Prices

To refresh all cryptocurrency prices, use the following command:

```shell
docker exec -it CRYPTO_TRACKER_NODE npm run refresh
```

## Need Help? Contact the Developer! 🙋‍♂️

If you have any questions, issues, or feature requests, feel free to contact the developer of this project.

- Name: David VANMAK
- Email: vanmakdavid+cryptocurrency_tracker @ gmail.com
- GitHub: [Slourp](https://github.com/Slourp/)
