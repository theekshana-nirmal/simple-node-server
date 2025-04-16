# Simple Node Server

[![Node.js](https://img.shields.io/badge/Node.js-22.x+-green.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple HTTP server built using Node.js's built-in `http` module. This project is designed as a learning exercise to understand the fundamentals of server-side programming, including basic environment variable configuration, before moving on to more advanced frameworks like Express.js.

## ✨ Features

- Basic HTTP server implementation.
- Handles incoming requests and sends simple text responses.
- Uses Node.js's built-in `http` module.
- Configures the server port using environment variables (`.env` file).
- Lightweight and beginner-friendly.

## 🎯 Purpose

This project was created purely for learning purposes. By building this server from scratch:

- I aim to understand the core concepts of Node.js and its `http` module.
- It introduces the practice of using environment variables for configuration (e.g., port numbers).
- It provides a hands-on foundation before progressing to more feature-rich frameworks like Express.js.
- It helps solidify understanding of basic server-client interactions.

## 🚀 How to Run

1. **Clone this repository:**

   ```
   git clone https://github.com/theekshana-nirmal/simple-node-server.git
   ```

   ```
   cd simple-node-server
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Create a `.env` file:**
   Create a file named `.env` in the root directory of the project and add the following line:

   ```env
   PORT=3000
   ```

   *(You can change `3000` to any port you prefer)*
4. **Start the server:**

   ```bash
   node index.js
   ```
5. **Access the server:**
   Open your web browser and navigate to `http://localhost:PORT/` (replace `PORT` with the value you set in your `.env` file, e.g., `http://localhost:3000/`). You should see the message "Hello, World!".

## 📚 Learning Objectives

- Understand how to create a basic server using Node.js's http module.
- Learn the fundamentals of handling HTTP requests and sending responses.
- Grasp the concept of ports and listening for incoming connections.
- Learn how to manage configuration like port numbers using environment variables (.env files and dotenv).
- Build a foundational understanding for developing more complex web applications and APIs.

## 🌱 Future Plans

- Implement basic routing to handle different URL paths (e.g., /about, /contact).
- Explore serving static HTML files instead of just plain text.
- Learn how to handle different HTTP methods (GET, POST, etc.).
- Transition to using the Express.js framework for more robust features and easier development.
