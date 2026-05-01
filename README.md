# Backend Developer Internship Assignment

## Project Overview
This project is a scalable REST API with authentication and role-based access, built using Node.js and MongoDB. It includes user authentication, protected routes, and CRUD operations.

---

## Tech Stack
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JSON Web Token (JWT)  
- bcrypt  

---

## Key Features
- User registration and login  
- Secure password hashing  
- JWT-based authentication  
- Role-based access control (User/Admin)  
- Protected routes  
- CRUD operations (Tasks)  
- Input validation and error handling  

---

## Project Structure

backend-project/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── app.js
├── .env
└── package.json


---

## Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/backend-project.git

cd backend-project


### 2. Install dependencies

npm install


### 3. Configure environment variables
Create a `.env` file in the root directory:

MONGO_URI=your_mongodb_connection_string


### 4. Run the server

node app.js


Server will run on:

http://localhost:5000


---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|---------|------------|
| POST | /api/v1/auth/register | Register a new user |
| POST | /api/v1/auth/login | Login and receive JWT |

---

### Tasks (Protected)
| Method | Endpoint | Description |
|--------|---------|------------|
| GET | /api/v1/tasks | Get all tasks |
| POST | /api/v1/tasks | Create a task |
| PUT | /api/v1/tasks/:id | Update a task |
| DELETE | /api/v1/tasks/:id | Delete a task |

---

## Authentication Flow
1. User logs in and receives a JWT token  
2. Token is sent in request headers:

Authorization: <token>

3. Middleware verifies token before granting access  

---

## Security Implementation
- Password hashing using bcrypt  
- JWT authentication  
- Protected routes using middleware  
- Basic input validation  

---

## Scalability Considerations
The application follows a modular MVC architecture, making it scalable for future enhancements. It can be extended with:
- Microservices architecture  
- Redis caching  
- Docker containerization  
- Load balancing  

---

## Screenshots

### Register API
ss(https://drive.google.com/file/d/1nVXl4n715WOQaPUPwI8ZEDW8R_EN0LN8/view?usp=drive_link)

### Login API
![Login](screenshots/login.png)

### Task API
![Task](screenshots/task.png)

### MongoDB Database
![MongoDB](screenshots/mongodb.png)

---

## Author
Anmol Kamble
