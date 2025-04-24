# 📘 Contact Form API with Azure Functions + Frontend

## 🌐 Overview

This project showcases a **full-stack serverless contact form** built using **Azure Function App (Node.js)** and a custom **HTML + JavaScript frontend**. It mimics a production-level “Contact Us” feature in a modern portfolio.

---

## ✅ Features & Achievements

### 🚀 Built a Serverless API using Azure Function App
- Runtime: Node.js 20
- POST endpoint: `/api/SubmitMessage`
- Validates `name`, `email`, and `message`
- Returns JSON responses
- Logs the message server-side

### 💻 Created a Fully Functional Frontend (HTML + JS)
- Clean, responsive contact form
- Sends data using `fetch()` to the API
- Displays live feedback from API responses

### 🌍 Solved Real-World CORS Challenge
- Local frontend couldn't access API initially
- Fixed by adding `*` in CORS config under Function App in Azure Portal

### 🔄 Tested and Validated End-to-End
- Tested with browser, Azure Portal’s Test/Run, and Postman
- Handled field validation, errors, and feedback display

---

## 🧪 Technologies Used

| Tool                | Purpose                       |
|---------------------|-------------------------------|
| Azure Function App  | Backend for form submission   |
| Node.js             | Function runtime              |
| HTML/CSS/JS         | Frontend UI and logic         |
| Azure Portal        | Deployment & configuration    |
| VS Code + Chrome DevTools | Local dev & debugging |

---

## 🧠 Challenges & Solutions

### ❌ CORS Error (Frontend blocked by browser)
- **Issue**: Browser blocked API calls from local file
- **Fix**: Added wildcard `*` to CORS config in Azure

---

## 📸 Screenshots (Add these in repo)
- Azure Portal test success
- Frontend form working
- Error-to-success transition
- Console logs (optional)

---

## 🧭 Next Steps (Coming Soon)
- 🌐 Host frontend using GitHub Pages
- ✉️ Send email using SendGrid
- 💾 Store messages in Azure Table or CosmosDB
- 🎨 UI upgrade using TailwindCSS or Bootstrap

---

## 📎 How to Use

1. Open `index.html` in a browser
2. Fill out name, email, and message
3. Click “Send Message”
4. Success message appears (from API)

---

## 🤝 Connect

Built with ❤️ by [Samuel Enwema](https://www.linkedin.com/in/samuelenwema)
