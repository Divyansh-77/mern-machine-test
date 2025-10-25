# MERN Stack To-Do List Application

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## 🚀 Project Overview

This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application built as a solution for a technical machine test. The primary goal was to demonstrate proficiency in building a complete CRUD (Create, Read, Update, Delete) application with a modern, decoupled architecture.

## 🛠️ Tech Stack & Architecture

### Core Technologies

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Deployment (Frontend):** Vercel
* **Deployment (Backend):** Render
* **API Testing:** Postman

### Architecture

This application uses a decoupled, service-oriented architecture:

* **Client (Frontend):** A standalone React application responsible for the UI and user interaction. It was deployed on Vercel.
* **Server (Backend):** A separate Node.js & Express.js REST API that handles all business logic and database communication. It was deployed on Render.
* **Database:** A cloud-hosted MongoDB Atlas cluster serves as the persistent data store, ensuring the frontend and backend are stateless.

## ✨ Features

* **Create:** Add new todo items to the list.
* **Read:** View all existing todos fetched from the database.
* **Delete:** Remove completed or unwanted todos from the database.
* **Full MERN Stack:** Demonstrates a complete end-to-end implementation.
* **Decoupled Architecture:** Frontend and backend are separate services, communicating via a REST API, which is a modern best practice.

## 📸 Proof of Deployment (Screenshots)

> **Note:** The live demo links have been deactivated to conserve free-tier resources and avoid costs. The following screenshots serve as proof of successful deployment and functionality.

### Frontend Deployment (Vercel)

This screenshot shows the live React application, deployed on Vercel, successfully fetching data from the live backend API.

![Vercel Deployment](https://drive.google.com/file/d/1yeQIgug-m1RmMyHrYiboIH8wBtXmcve-/view?usp=drive_link)

### Backend API Testing (Postman)

This screenshot shows successful Postman tests against the live, deployed backend API on Render.com, confirming the `GET` and `POST` endpoints were working correctly.

![Postman Test]()

## ⚙️ How to Run Locally

### Step 1: Clone the Repository

```bash
git clone [https://github.com/YOUR_USERNAME/mern-machine-test.git](https://github.com/YOUR_USERNAME/mern-machine-test.git)
cd mern-machine-test
Step 2: Setup Backend (Server)
Navigate to the server directory:

Bash

cd server
Install dependencies:

Bash

npm install
Create a .env file in the /server directory and add your MongoDB connection string:

ATLAS_URI=your_mongodb_connection_string_here
Step 3: Setup Frontend (Client)
From the root folder, navigate to the client directory:

Bash

cd ../client
Install dependencies:

Bash

npm install
Step 4: Run the Application
You will need two terminals running simultaneously.

Terminal 1 (Backend):

Bash

# From the /server directory
node server.js
# Your backend will be running on http://localhost:5000
Terminal 2 (Frontend):

Bash

# From the /client directory
npm start
# Your frontend will open automatically on http://localhost:3000
Open http://localhost:3000 in your browser to use the application.