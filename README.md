# 📝 MegaBlog– A Full-Stack Blog Website with React & Appwrite

MegaBlog is a production-ready, full-stack blogging platform built using **React** and **Appwrite** (BaaS). It features secure user authentication, global state management, dynamic CRUD operations, automated slug generation, and an integrated rich-text editor.

---

## 🚀 Tech Stack

*   **Frontend:** React.js (Vite), React Router DOM, TailwindCSS
*   **State & Forms:** Redux Toolkit, React Hook Form
*   **Rich Text Editor:** TinyMCE
*   **Backend-as-a-Service (BaaS):** Appwrite (Auth, Database, Storage)

---

## ✨ Key Features

*   🔐 **Full Authentication:** Secure Sign Up, Login, and persistent sessions via Appwrite Account API.
*   ✍️ **Complete CRUD Architecture:** Create, read, update, and delete active or draft blog posts.
*   📖 **Rich Text Editing:** Advanced content creation powered by TinyMCE integration.
*   🖼️ **Image Management:** Seamless image uploads and instant dynamic previews via Appwrite Storage.
*   🛡️ **Protected Routes:** Navigation guards that restrict unauthorized users from backend routes.
*   ⚙️ **Auto-Slug Generation:** Real-time, URL-friendly slug creation from post titles.

---

## 🛠️ Environment Variables

Create a `.env` file in your root directory:

```env
VITE_APPWRITE_URL="[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)"
VITE_APPWRITE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_APPWRITE_DATABASE_ID="YOUR_DATABASE_ID"
VITE_APPWRITE_COLLECTION_ID="YOUR_COLLECTION_ID"
VITE_APPWRITE_BUCKET_ID="YOUR_BUCKET_ID"


🧾 License
This project is open-source and free to use.

Built with ❤️ using React & Appwrite.
