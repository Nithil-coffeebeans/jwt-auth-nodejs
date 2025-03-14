# JWT Authentication in Node.js

This is a simple Node.js project demonstrating JWT authentication with three routes:

1. **User Registration (`/register`)** - Allows new users to sign up.
2. **Login (`/login`)** - Authenticates users and returns a JWT token.
3. **Protected Route (`/main`)** - A secured route accessible only to authenticated users with a valid token.

## Features

- User registration with hashed passwords
- JWT-based authentication
- Middleware to verify JWT tokens and identify users
- Secure access to protected routes

## Tech Stack

- Node.js
- Express.js
- JSON Web Token (JWT)
- bcrypt.js (for password hashing)

## Installation

Clone the repository:

```sh
git clone <repo-url>
cd <project-directory>
```

Install dependencies:

```sh
npm install
```

## Configuration

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
JWT_SECRET=your_secret_key
```

## Running the Project

Start the server:

```sh
node index.js
```

## API Endpoints

### 1. Register User

**Endpoint:** `POST /register`

**Request Body:**

```json
{
  "email": "exampleUser",
  "password": "examplePassword"
}
```

**Response:**

```json
{
  "message": "User registered successfully"
}
```

### 2. Login

**Endpoint:** `POST /login`

**Request Body:**

```json
{
  "email": "exampleUser",
  "password": "examplePassword"
}
```

**Response:**

```json
{
  "token": "your_jwt_token"
}
```

### 3. Access Protected Route

**Endpoint:** `GET /main`

**Headers:**

```json
{
  "Authorization": "Bearer your_jwt_token"
}
```

**Response:**

```json
{
  "message": "Welcome to the protected route!",
  "user": "exampleUser"
}
```

## License

This project is open-source and free to use.
