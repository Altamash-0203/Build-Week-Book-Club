# 📚 BookDonalds

## 🧩 Introduction

**BookDonalds** is a frontend-only book club platform that allows users to discover top-rated books and join or create book discussion clubs. It encourages reading through community engagement, voting, and interactive club chats. The platform uses the Google Books API for book data and Firebase Firestore as the database.

---

## 🗂️ Project Type

Frontend

---

## 🌐 Deployed App

- **Frontend**: [https://book-donalds.netlify.app](https://book-donalds.netlify.app)
- **Database**: Firebase Firestore

---

## 🎥 Video Walkthroughs

- **🧑‍💻 Codebase Overview**: [Click here to view codebase walkthrough](https://drive.google.com/drive/folders/1MAAO0Be6GNVdIpzENML88Erjp-ZqQA-v?usp=drive_link)

---

## 🚀 Features

- 🔍 Browse top-rated books (Google Books API)
- 📚 View all clubs
- ✍️ Create a new book club
- 💬 Join club chat rooms
- ⚡ Live updates with Firebase Firestore
- 📱 Responsive design with Tailwind CSS

---

## 💡 Design Decisions & Assumptions

- **No backend**: Firebase Firestore is used for realtime database functionality.
- **Book data**: Pulled directly from Google Books API based on "top rated books" query.
- **Authentication**: Currently open (no login); future versions can integrate Firebase Auth.

---

## 🛠️ Installation & Getting Started

Make sure you have Node.js and npm installed.

```bash
# Clone the repo
git clone https://github.com/your-username/book-donalds.git
cd book-donalds

# Install dependencies
npm install

# Start the local development server
npm run dev

