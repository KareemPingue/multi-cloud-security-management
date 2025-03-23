# Multi-Cloud Security Management

## Overview

Multi-Cloud Security Management (MCSM) is a system designed to streamline security policy enforcement across AWS, Azure, and Google Cloud. The project provides a unified interface for managing IAM policies, simulating cloud security configurations, and automating policy enforcement using OPA and Redis for caching.

## Project Structure

The project is structured into backend and frontend directories. The backend, built with Java (Spring Boot) and Node.js (Express.js), includes services for IAM policy enforcement across AWS, Azure, and Google Cloud. It contains modules for policy evaluation (OPA), caching (Redis), and CLI interaction. The frontend, generated with Lovable, is a React.js application managing cloud security settings. The Maven simulation directory mimics cloud SDK interactions locally, while the policies folder stores predefined security rules.

## Features

*   **Cross-Cloud IAM Policy Management:** Simulates AWS, Azure, and Google Cloud IAM policies without requiring actual cloud SDK calls.
*   **Policy Evaluation with Open Policy Agent (OPA):** Uses OPA to validate access rules and enforce security policies.
*   **Role-Based Access Control (RBAC):** Manages users and roles with JSON-based IAM policies.
*   **CLI & API Support:** Offers a command-line interface (CLI) and REST API for managing security policies.
*   **Caching with Redis:** Optimizes policy lookups and enhances performance.

## Technology Stack

### Frontend

*   **React.js:** User interface for managing cloud security settings.
*   **Redux (or Context API):** State management for UI components.
*   **Axios (or Fetch API):** Handles API requests to backend.
*   **TailwindCSS / Material UI:** Styling framework.

### Backend

*   **Java 24 (Spring Boot):** Handles core IAM logic and API endpoints.
*   **Maven:** Dependency management.
*   **Redis:** Caching system for fast retrieval of security policies.
*   **OPA (Open Policy Agent):** Policy enforcement engine.
*   **Docker:** Containerized deployment for backend services.

### Cloud Integrations (Simulated)

*   **GoogleCloudPolicy.java:** Simulated IAM policy management for Google Cloud.
*   **AWSCloudPolicy.java:** Simulated IAM policy handling for AWS.
*   **AzureCloudPolicy.java:** Simulated IAM policy enforcement for Azure.

### CI/CD & Security

*   **GitHub Actions:** Automates deployment and policy validation.
*   **IAM (Identity and Access Management):** Simulated authentication and authorization.

## Setup & Deployment

### Backend Setup

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the backend folder and build the project:

    ```bash
    cd backend
    mvn clean install
    ```

3.  Run the backend service:

    ```bash
    java -jar target/<your_application_name>.jar
    ```
    (Replace `<your_application_name>` with the actual name of the generated JAR file)

### Frontend Setup

1.  Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Start the frontend:

    ```bash
    npm start
    # or
    yarn start
    ```

## Contributing

Contributions are welcome! Please submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License.
