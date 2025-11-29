# 📝 Todo App (Full-Stack Application)

A full-stack Todo application built with:

- **Spring Boot (Backend)**
- **React (Frontend)**
- **MySQL**
- **Axios**
- **ModelMapper**
- **Global Exception Handling**
- **Indian Date Format for Responses**

This project demonstrates clean architecture, DTO usage, exception handling, and a fully working REST API.

---

## 📂 Project Structure

Todo App/
│
├── React_1_Todo/ # Frontend (React + Axios)
│
├── TodoAppBackend/ # Backend (Spring Boot)
│ ├── controller/
│ ├── service/
│ ├── repository/
│ ├── model/
│ ├── dto/
│ ├── exception/
│ ├── common/mapper/
│ ├── config/ # CORS config
│ └── src/main/resources/
│ └── application.properties (ignored in Git)
│
└── .gitignore


---

## 🚀 Tech Stack

### **Frontend**
- React (Vite or CRA)
- Axios
- Tailwind (optional)
- Redux Toolkit (optional)

### **Backend**
- Java 17+
- Spring Boot 3.x
- Spring Data JPA
- MySQL
- ModelMapper
- Jakarta Validation
- Global Exception Handler
- CORS Configuration

---

## 🎯 Features

### **Backend**
- Create Todo
- DTO → Entity mapping via ModelMapper
- Validation using `@Valid`
- Global Exception Handling with clean JSON errors
- Timestamps returned in Indian format
- CORS enabled for React frontend

### **Frontend**
- Todo creation form
- Axios POST request
- Handles backend errors gracefully
- Clean UI structure

---

## ⚙️ Backend Setup (Spring Boot)

### 1️⃣ Update MySQL configuration
Create `application.properties` inside:

`TodoAppBackend/src/main/resources/application.properties`

spring.datasource.url=jdbc:mysql://localhost:3306/todos
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.jackson.time-zone=Asia/Kolkata


**NOTE:** `application.properties` is ignored in `.gitignore` (for security).

---


### 2️⃣ Run Backend

```bash
cd TodoAppBackend
mvn spring-boot:run
```


### 2️⃣ Run Frontend
```bash
npm run dev
```
### 🔐 Security & .gitignore

The following are ignored for safety:

application.properties
.env files
node_modules
target
dist
.idea
*.iml


## 👨‍💻 Author

Kushal Rathore      
Full Stack Developer (React + Spring Boot)