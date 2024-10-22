# Personal Expense Tracker

This project is a RESTful API for managing personal financial transactions such as income and expenses.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository/expense-tracker.git
   cd expense-tracker

   ```

2. Install dependencies: npm install
3. Run the application: npm start
4. The server should now be running on http://localhost:3000.

## Project Structure:

expense-tracker/ │ ├── node_modules/ # Auto-generated after running npm install ├── routes/ # Contains all route definitions │ └── transactionRoutes.js ├── database/ # Contains database connection and initialization │ └── database.js ├── .gitignore # To exclude node_modules and other files from Git ├── package.json # Project dependencies and scripts ├── package-lock.json # Auto-generated for locked versions of dependencies ├── README.md # Project documentation and setup guide ├── server.js # Main entry point of the application └── expenses.db # SQLite database file (created automatically)

## API Endpoints

- POST /transactions: Add a new transaction.
- GET /transactions: Get all transactions.
- GET /transactions/ : Get a transaction by ID.
- PUT /transactions/ : Update a transaction by ID.
- DELETE /transactions/ : Delete a transaction by ID.
- GET /transactions/summary: Get a summary of all transactions.

## Example Requests:

Add a Transaction POST /transactions

Request body: { "type": "income", "category": "Salary", "amount": 5000, "date": "2024-10-22", "description": "October Salary" }

Get All Transactions GET /transactions

Response:

[ { "id": 1, "type": "income", "category": "Salary", "amount": 5000, "date": "2024-10-22", "description": "October Salary" }, ... ]

Get Summary GET /transactions/summary

Response:

{ "total_income": 5000, "total_expense": 0, "balance": 5000 }

---

#### **2.5. `.gitignore`** (To exclude unnecessary files from Git)

```gitignore
/node_modules
/expenses.db

## Final Steps:
1. Create the project folder and files as described.
2. Copy and paste the code provided into the respective files.
3. Run the server with npm start and test it using Postman or any other API client.
This project structure and code will give you a functioning Personal Expense Tracker API using Node.js, Express.js, and SQLite.
```
