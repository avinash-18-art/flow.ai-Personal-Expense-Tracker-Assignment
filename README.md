# Personal Expense Tracker

A RESTful API for managing personal financial records where users can record their income, expenses, view transaction history, and generate reports.

## Features

- CRUD operations for managing financial transactions (income and expense).
- User authentication (JWT) for securing transactions.
- Pagination for transaction listing.
- Monthly spending report by category.
- Error handling for invalid inputs and transaction IDs.
- Optional SQLite or MongoDB as the database.

## Tools and Technologies:

- Node.js
- Express.js
- SQLite (or MongoDB for NoSQL)
- Sequelize ORM
- JWT Authentication
- Postman for testing API

## Project Structure:

personal-expense-tracker/ │ ├── config/ │ └── auth.js │ └── db.js │ ├── controllers/ │ └── transactions.js │ └── users.js │ ├── models/ │ └── transaction.js │ └── user.js │ ├── routes/ │ └── transactions.js │ └── users.js │ ├── middleware/ │ └── errorHandler.js │ ├── .env ├── app.js ├── package.json ├── README.md └── migrations/ (if using SQLite with Sequelize)

## Setup Instructions:

1. Clone the repository: git clone https://github.com/avinash-18-art/flow.ai-Personal-Expense-Tracker-Assignment.git

2. Navigate to the project directory: cd personal-expense-tracker

3. Install dependencies: npm install

4. Set up environment variables: Create a .env file in the root of the project and add the following: JWT_SECRET=your_jwt_secret

5. Set up the database: For SQLite: The database will automatically be created using SQLite when you start the server. Sequelize will handle the creation of the necessary tables (Users and Transactions).

For MongoDB (Optional): If you prefer to use MongoDB, configure the db.js file to connect to your MongoDB instance, and modify the models accordingly.

6. Start the server: node app.js By default, the server will run on http://localhost:5000.

## API Endpoints

Authentication Register a new user URL: POST /api/register Description: Registers a new user. Request Body: json Copy code { "name": "John Doe", "email": "john@example.com", "password": "password123" } Response: json Copy code { "message": "User registered successfully" }

## Login

URL: POST /api/login Description: Authenticates a user and provides a JWT. Request Body: json Copy code { "email": "john@example.com", "password": "password123" } Response: json Copy code { "token": "jwt_token_here" }

## Transactions

Create a transaction URL: POST /api/transactions Headers: Authorization: Bearer <JWT_TOKEN> Description: Creates a new income or expense transaction. Request Body: json Copy code { "type": "income", "category": "Salary", "amount": 1000, "date": "2024-10-01", "description": "Monthly salary" } Response: json Copy code { "message": "Transaction created successfully" }

## Get all transactions (with pagination)

URL: GET /api/transactions?page=1&limit=10 Headers: Authorization: Bearer <JWT_TOKEN> Description: Fetches all transactions for the authenticated user with pagination. Query Parameters: page: Page number (default: 1). limit: Number of transactions per page (default: 10). Response: json Copy code { "transactions": [ { "id": 1, "type": "income", "category": "Salary", "amount": 1000, "date": "2024-10-01", "description": "Monthly salary" } ], "currentPage": 1, "totalPages": 2, "totalItems": 15 }

## Get transaction by ID

URL: GET /api/transactions/:id Headers: Authorization: Bearer <JWT_TOKEN> Description: Fetches a specific transaction by ID. Response: json Copy code { "id": 1, "type": "income", "category": "Salary", "amount": 1000, "date": "2024-10-01", "description": "Monthly salary" }

## Delete a transaction

URL: DELETE /api/transactions/:id Headers: Authorization: Bearer <JWT_TOKEN> Description: Deletes a specific transaction by ID. Response: json Copy code { "message": "Transaction deleted successfully" }

## Summary

Get summary of income and expenses URL: GET /api/summary Headers: Authorization: Bearer <JWT_TOKEN> Description: Retrieves the total income, total expenses, and balance for the user. Response: json Copy code { "totalIncome": 2000, "totalExpenses": 500, "balance": 1500 }

## Report

Get monthly spending report by category URL: GET /api/report/monthly?month=9&year=2024 Headers: Authorization: Bearer <JWT_TOKEN> Description: Generates a monthly spending report grouped by category. Query Parameters: month: Month (1-12). year: Year (e.g., 2024). Response: json Copy code { "month": "9", "year": "2024", "report": [ { "category": "Groceries", "totalSpent": 200 }, { "category": "Transport", "totalSpent": 100 } ] }

## Postman API Testing

## Here are some screenshots of the Postman API calls:

1.User Registration:

2.User Login:

3.Create Transaction:

4.Get Transactions (Pagination):

5.Get Summary:

## License:

This project is licensed under the MIT License.

```

```
