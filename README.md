# Blazpay Internship Assignment

This project is a web application built for the Blazpay internship assignment. It features a frontend built with React.js and a backend powered by Node.js and Express.js, fulfilling the requirements outlined in the task description.

## Description

This project is a comprehensive solution to the Blazpay React.js Intern role assignment. The primary goal was to replicate a given Figma design and implement specific dynamic functionalities. The application showcases a modern, responsive user interface and a robust backend to handle API requests. All numerical data, such as countdown timers and statistics, is fetched dynamically from the backend, ensuring that the information displayed is always up-to-date.

## Features

* **Figma Design Replication**: The frontend is a faithful implementation of the provided Figma design, ensuring a visually appealing and consistent user experience.
* **Dynamic Data Integration**: Key numerical data, including countdown timers and statistics, is fetched from the backend API, making the application's content dynamic and easily manageable.
* **"Latest Updates" Section**: This interactive section includes an API route that captures user emails and stores them in a MongoDB database, allowing users to join a waitlist.

## Tech Stack

### Frontend

* **React.js**: A JavaScript library for building user interfaces.
* **Vite**: A fast build tool and development server for modern web projects.
* **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
* **Lucide React**: A library for clean and consistent icons.
* **Sonner**: A toast notification component from Shadcn UI for React.

### Backend

* **Node.js**: A JavaScript runtime environment for building server-side applications.
* **Express.js**: A minimal and flexible Node.js web application framework.
* **MongoDB**: A NoSQL database for storing application data.
* **Mongoose**: An ODM library for MongoDB and Node.js.
* **CORS**: A package for enabling Cross-Origin Resource Sharing.
* **Dotenv**: A module to load environment variables from a `.env` file.

---

## Setup and Installation

### Frontend Setup

To get the frontend up and running, follow these steps:

1.  **Navigate to the frontend directory**:
    ```bash
    cd frontend-blazpay
    ```
2.  **Install the necessary dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

### Backend Setup

To set up the backend, follow these instructions:

1.  **Navigate to the backend directory**:
    ```bash
    cd backend-blazpay
    ```
2.  **Install the required dependencies**:
    ```bash
    npm install
    ```
3.  **Configure environment variables**:
    Create a `.env` file in the `backend-blazpay` directory and add the following variables:
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
    PORT=8080
    ```
4.  **Start the server**:
    ```bash
    npm start
    ```
    The server will start on port 8080.