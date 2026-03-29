# 🤖 AI Email Writer (Full Stack Application)

An AI-powered email generation system that helps users create smart, professional emails instantly using modern full-stack technologies.

---

## 📌 Project Overview

This project is a **full-stack AI email generator** built with:

* ⚛️ React (Frontend UI)
* ☕ Spring Boot (Backend APIs)
* 🐳 Docker (Containerization)
* ☁️ AWS (Deployment Ready)
* 🔁 Jenkins (CI/CD Ready)

It allows users to input context and generate emails using AI logic from the backend.

---

## 🏗️ Project Structure

```
FULLSTACK/
│
├── email-ui/email-writer-react/      # Frontend (React + Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── assets/
│   ├── index.html
│   ├── package.json
│   ├── Dockerfile
│
├── email-writer/email-writer/        # Backend (Spring Boot)
│   ├── src/main/java/com/email/writer/
│   │   ├── EmailRequest.java
│   │   ├── GenerateEmailController.java
│   │   ├── GenerateEmailService.java
│   │   ├── WebClientConfig.java
│   │   ├── EmailWriterApplication.java
│   │
│   ├── resources/
│   │   ├── application.properties
│   │
│   ├── Dockerfile
│   ├── pom.xml
│
└── docker-compose.yml               # Multi-container setup
```

---

## ✨ Features

* 🤖 AI-based email content generation
* ⚡ Fast REST API using Spring Boot
* 🎯 Clean UI using React + Vite
* 🔗 Frontend ↔ Backend integration
* 🐳 Fully Dockerized application
* ☁️ Ready for AWS deployment
* 🔁 CI/CD ready with Jenkins

---

## 🛠️ Tech Stack

**Frontend**

* React.js (Vite)
* HTML5, CSS3, JavaScript

**Backend**

* Java 17
* Spring Boot
* WebClient (for API calls)

**DevOps**

* Docker
* Docker Compose
* Jenkins
* AWS (EC2)

---

## ⚙️ How to Run the Project

### 🔹 Option 1: Run with Docker (Recommended)

```bash
docker-compose up --build
```

👉 Runs both frontend & backend together

---

### 🔹 Option 2: Run Manually

#### Backend

```bash
cd email-writer/email-writer
mvn spring-boot:run
```

#### Frontend

```bash
cd email-ui/email-writer-react
npm install
npm run dev
```

---

## 🔗 API Endpoint

```http
POST /api/email/generate
```

### Sample Request:

```json
{
  "prompt": "Write a professional leave request email"
}
```

---


## 🚀 Future Enhancements

* Gmail API Integration
* User Authentication (JWT)
* Email Templates
* AI tone customization

---

## 👨‍💻 Author

**Sunil Mallela**
Java Full Stack Developer

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
