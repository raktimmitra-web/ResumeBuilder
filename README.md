# 🧾 Resume Builder App

A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to easily create, edit, and download professional resumes with a sleek and responsive interface.

---

## 🚀 Features

- 🧍‍♂️ **Multi-step resume creation form**
- ✏️ **Edit and update resumes** with autosave functionality
- 📄 **Resume download** (PDF or printable view)
- ☁️ **MongoDB-backed persistence** for user resumes
- 🎨 **Modern UI** with Tailwind CSS
- 🔐 Authentication ready

---

---

## ⚙️ Tech Stack

**Frontend:**

- React
- React Hook Form
- Axios
- Tailwind CSS
- Vite
- Zustand

**Backend:**

- Express.js
- MongoDB + Mongoose
- Puppeteer
- cors

---

## 🧩 How It Works

1. When a user starts creating a resume, User is shown a dialog box to write the resume title.
2. Once they click enter, User can choose a template for resume.
3. After choosing the template, A **Multi-step** is shown to the user to fill up.
4. Users can **edit, delete, or download** their saved resumes later.

---

## 🛠️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/raktimmitra-web/ResumeBuilder.git
cd resume-builder

```

### Dowload Dependencies

```bash
cd backend
npm install

cd frontend
npm install

```
### Create an env in backend

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
REFRESH_TOKEN_SECRET = "Your refresh token secret"
ACCESS_TOKEN_SECRET = "Your access token secret"
```
