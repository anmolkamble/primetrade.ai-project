# 🚀 Backend Developer Internship Assignment

## 📌 Project Overview

This project is a scalable REST API with authentication and role-based access, built using Node.js and MongoDB. It includes user authentication, protected routes, and CRUD operations.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (Password Hashing)

---

## 🔐 Features

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication
* Role-based access (User/Admin)
* Protected APIs
* CRUD operations (Tasks)
* Error handling & validation

---

## 📁 Project Structure

controllers/ → Business logic
models/ → Database schemas
routes/ → API routes
middleware/ → Auth middleware

---

## 🚀 How to Run

1. Clone repository:

```
git clone <your-github-link>
```

2. Install dependencies:

```
npm install
```

3. Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

4. Start server:

```
node app.js
```

---

## 📡 API Endpoints

### Auth

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### Tasks

* GET `/api/v1/tasks`
* POST `/api/v1/tasks`
* PUT `/api/v1/tasks/:id`
* DELETE `/api/v1/tasks/:id`

---

## 🔒 Security

* JWT Authentication
* Password hashing
* Protected routes

---

## 📈 Scalability Note

The project follows a modular MVC architecture, making it scalable for future enhancements. It can be extended with microservices, caching (Redis), and load balancing.

---

## 📸 Screenshots

(Add Postman + MongoDB screenshots here)

---

## 👨‍💻 Author

Anmol Kamble
