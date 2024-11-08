
markdown
Copy code
# Loan Management System

This is a simple Loan Management System built with **Node.js** (Express) for the backend and **React** for the frontend. The app allows users to register, login, request loans, and view loan statuses.

## Features

- **User Registration**: Allows new users to sign up.
- **User Authentication**: Login functionality using JWT tokens.
- **Loan Application**: Users can apply for loans.
- **Loan Management**: View loan details and statuses.
- **Frontend**: Built with React, with responsive UI and styling.
- **Backend**: Node.js with Express and MongoDB for persistent data storage.

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Installation](#installation)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
3. [Environment Variables](#environment-variables)
4. [API Endpoints](#api-endpoints)
   - [Authentication Endpoints](#authentication-endpoints)
   - [Loan Endpoints](#loan-endpoints)
5. [Project Structure](#project-structure)
6. [Running the App](#running-the-app)
7. [Contributing](#contributing)
8. [License](#license)

---

## Tech Stack

- **Frontend**:
  - React.js
  - Axios for API calls
  - React Router for routing
  - CSS (App.css for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for data storage)
  - JWT (for authentication)
  - Bcrypt.js (for hashing passwords)

---

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/myloan-app.git
   cd myloan-app/backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root of the backend directory and add your environment variables:

bash
Copy code
DB_URL=mongodb://localhost:27017/myloanapp
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy code
node server.js
The server should now be running on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend React app:

bash
Copy code
npm start
The frontend should now be running on http://localhost:3000.

Environment Variables
DB_URL: MongoDB connection string (for local development, use mongodb://localhost:27017/myloanapp).
JWT_SECRET: Secret key used for signing JWT tokens.
API Endpoints
Authentication Endpoints
POST /api/auth/register - User Registration

Request body:
json
Copy code
{
  "username": "user1",
  "password": "password123"
}
Response:
json
Copy code
{
  "message": "User registered successfully"
}
POST /api/auth/login - User Login (Generates JWT Token)

Request body:
json
Copy code
{
  "username": "user1",
  "password": "password123"
}
Response:
json
Copy code
{
  "token": "jwt_token_here"
}
Loan Endpoints
POST /api/loans/create - Create a Loan Request

Request body:
json
Copy code
{
  "amount": 5000,
  "term": 12,
  "interestRate": 7.5,
  "userId": "user_id_here"
}
Response:
json
Copy code
{
  "message": "Loan created successfully",
  "loan": {
    "amount": 5000,
    "term": 12,
    "interestRate": 7.5,
    "userId": "user_id_here"
  }
}
GET /api/loans/view - View All Loan Requests (Requires Authentication)

Request headers:
bash
Copy code
Authorization: Bearer <jwt_token>
Response:
json
Copy code
[
  {
    "amount": 5000,
    "term": 12,
    "interestRate": 7.5,
    "status": "Pending"
  },
  {
    "amount": 10000,
    "term": 24,
    "interestRate": 8.5,
    "status": "Approved"
  }
]
Project Structure
bash
Copy code
myloan-app
├── backend            # Backend API
│   ├── controllers
│   │   ├── authController.js   # Handles user authentication
│   │   └── loanController.js   # Handles loan operations
│   ├── models
│   │   ├── User.js           # User schema for authentication
│   │   └── Loan.js           # Loan schema for loan requests
│   ├── routes
│   │   ├── authRoutes.js     # Authentication routes
│   │   └── loanRoutes.js     # Loan routes
│   ├── config
│   │   └── db.js             # MongoDB connection
│   ├── server.js             # Entry point for the backend server
│   └── .env                 # Environment variables
│
└── frontend               # Frontend (React app)
    ├── public
    │   └── index.html      # HTML file for loading the React app
    ├── src
    │   ├── App.js          # Main React component
    │   ├── components
    │   │   ├── LoanForm.js   # Loan request form component
    │   │   ├── LoginForm.js  # Login form component
    │   │   └── LoanStatus.js # Loan status display component
    │   ├── App.css          # CSS file for styling the frontend
    └── package.json         # Frontend dependencies
Running the App
Backend:

Run the backend by executing node server.js in the backend folder. This will start the server on http://localhost:5000.
Frontend:

Run the frontend by executing npm start in the frontend folder. This will start the React app on http://localhost:3000.
Testing the App:

Open the frontend in your browser (http://localhost:3000).
Use Postman or the frontend to interact with the API for registering, logging in, and applying for loans.
Contributing
If you'd like to contribute to this project, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes and commit them (git commit -am 'Add your feature').
Push to the branch (git push origin feature/your-feature-name).
Create a new Pull Request.

1. Setting up Postman
First, make sure you have Postman installed. If not, you can download it from here.

2. Start Backend Server
Before you can test the API, ensure your backend is running:

bash
Copy code
cd backend
node server.js
This should start the backend on http://localhost:5000.

API Testing in Postman
A. User Authentication (Registration & Login)
1. POST /api/auth/register (Register New User)
URL: http://localhost:5000/api/auth/register
Method: POST
Body:
Set the body type to raw and choose JSON from the dropdown in Postman.
Send a JSON request like the following:
json
Copy code
{
  "username": "user1",
  "password": "password123"
}
Response:
json
Copy code
{
  "message": "User registered successfully"
}
This will create a new user and return a confirmation message.

2. POST /api/auth/login (Login User)
URL: http://localhost:5000/api/auth/login
Method: POST
Body:
Set the body type to raw and choose JSON from the dropdown.
Send the following JSON request with the correct login credentials:
json
Copy code
{
  "username": "user1",
  "password": "password123"
}
Response:
json
Copy code
{
  "token": "your_jwt_token_here"
}
Save the token from the response because you’ll need it to authenticate subsequent requests.

B. Loan Management
3. POST /api/loans/create (Create a Loan Request)
URL: http://localhost:5000/api/loans/create

Method: POST

Headers:

Add a header: Authorization: Bearer <your_jwt_token_here>
Replace <your_jwt_token_here> with the JWT token you received from the login response.
Body:

Set the body type to raw and choose JSON.
Send a JSON request like this to create a loan application:
json
Copy code
{
  "amount": 5000,
  "term": 12,
  "interestRate": 7.5,
  "userId": "user_id_here"
}
Response:
json
Copy code
{
  "message": "Loan created successfully",
  "loan": {
    "amount": 5000,
    "term": 12,
    "interestRate": 7.5,
    "status": "Pending",
    "userId": "user_id_here"
  }
}
This will create a loan application and return the loan details.

4. GET /api/loans/view (View All Loan Requests)
URL: http://localhost:5000/api/loans/view

Method: GET

Headers:

Add a header: Authorization: Bearer <your_jwt_token_here>
Replace <your_jwt_token_here> with the JWT token you received.
Response:

json
Copy code
[
  {
    "amount": 5000,
    "term": 12,
    "interestRate": 7.5,
    "status": "Pending"
  },
  {
    "amount": 10000,
    "term": 24,
    "interestRate": 8.5,
    "status": "Approved"
  }
]
This will fetch all the loans requested by the user.

C. Error Handling
5. POST /api/auth/register (Register with Existing User)
URL: http://localhost:5000/api/auth/register
Method: POST
Body:
json
Copy code
{
  "username": "user1",
  "password": "password123"
}
Response (If the username already exists):
json
Copy code
{
  "message": "User already exists"
}
D. Additional Endpoints
If your API has other features, such as updating loans, or managing other resources, you can follow a similar pattern:

POST, PUT, DELETE methods for specific resources.
Ensure to include the correct JWT token in the Authorization header for protected routes.
Step-by-Step Summary for Postman
Here’s a summary of the steps you need to follow in Postman:

User Registration:

Make a POST request to /api/auth/register with a JSON body containing the username and password.
You’ll receive a success message if the user is registered successfully.
User Login:

Make a POST request to /api/auth/login with a JSON body containing the username and password.
Save the token you receive in the response. You will use it for authenticating future requests.
Create Loan Request:

Make a POST request to /api/loans/create with a JSON body containing the loan details (amount, term, interestRate, userId).
Include the JWT token in the Authorization header.
View Loan Requests:

Make a GET request to /api/loans/view to view all loan requests. Include the JWT token in the Authorization header.
You’ll get a list of all loans.
Error Handling:

If you try to register an existing user or try to access an endpoint without a valid JWT token, you’ll receive an error message indicating the issue (e.g., "User already exists" or "Unauthorized").
Testing and Troubleshooting
Unauthorized Access: If you receive a 401 Unauthorized error, it means you didn’t provide the correct JWT token. Ensure you add the Authorization: Bearer <your_jwt_token_here> header to your request.
Bad Request: If the request body is missing required fields, you will receive a 400 Bad Request error with a message indicating what fields are missing.
Internal Server Errors: If you see a 500 Internal Server Error, check the backend logs for further details. This could be caused by an issue with your database connection or server configuration.
Sample Postman Collection
You can also create a Postman Collection to organize these requests for easy reuse:

Create a new collection in Postman.
Add requests for each of the endpoints described above.
Organize them by folders, e.g., Authentication, Loan Requests, etc.
Export the collection as a .json file and share it with your team for easy setup.

