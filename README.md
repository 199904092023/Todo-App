# 📝 Todo App (React + Spring Boot + MySQL)

A simple and clean full-stack Todo application built using **React** (frontend) and **Spring Boot + MySQL** (backend).  
Users can create todos, view all todos, and mark todos as completed.

---

## 🚀 Tech Stack

### **Frontend**
- React (Vite)
- Axios
- React Router
- Custom Hooks
- Vanilla CSS (inline styles)

### **Backend**
- Java Spring Boot
- Spring Web
- Spring Data JPA
- MySQL Driver
- ModelMapper
- Lombok

---

## 📁 Project Structure

Todo-App/
│
├── React_1_Todo/ # Frontend (React)
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
└── TodoAppBackend/ # Backend (Spring Boot)
├── src/main/java/com/kushal199/TodoAppBackend/
│ ├── controller/
│ ├── service/
│ ├── model/
│ ├── dto/
│ ├── repository/
│ └── config/
├── pom.xml
└── application.properties (ignored in .gitignore)


---

## ⚙️ Backend Setup (Spring Boot)

### 1️⃣ Configure MySQL Database
Create a database:

```sql
CREATE DATABASE todos;

```
### 2️⃣ Add credentials in application.properties
Note: this file is ignored in Git for security.
``` 
spring.datasource.url=jdbc:mysql://localhost:3306/todos
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3️⃣ Run Backend

```bash
cd TodoAppBackend
mvn spring-boot:run
```
Backend will start at:
```
http://localhost:8080
```
### 🌐 Backend API Endpoints

| Method | Endpoint                   | Description            |
| ------ | -------------------------- | ---------------------- |
| POST   | `/api/todos/create`        | Create a new Todo      |
| GET    | `/api/todos/all`           | Get all Todos          |
| PATCH  | `/api/todos/{id}/complete` | Mark Todo as completed |

### 👨‍💻 Author

``
Kushal Rathore
(React + Java Spring Full Stack Developer)
``

## 📝 License

This project is free to use and modify.

## ⭐ Feedback

If you liked this project, consider giving a ⭐ on GitHub!
