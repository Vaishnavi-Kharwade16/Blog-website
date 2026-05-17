# 📝 MegaBlog – A Full-Stack Blog Website

> **Deployed as:** [PenFlow]
MegaBlog is a modern, full-stack blog platform built with React and Appwrite. It is designed to offer a seamless user experience for creating, updating, and reading blog posts, featuring full authentication, secure file uploads, protected routing, and dynamic rich-text content rendering.

This project is ideal for React developers looking to explore full-stack development using a Backend-as-a-Service (BaaS) platform.

---

## 🚀 Tech Stack

*   **Frontend:** React.js (Vite)
*   **State Management:** Redux Toolkit
*   **Routing:** React Router DOM
*   **Forms & Validation:** React Hook Form
*   **Styling:** TailwindCSS
*   **Rich Text Editor:** TinyMCE
*   **Backend-as-a-Service (BaaS):** Appwrite

---

## 🧠 Motivation & Learning Goals

*   **State & Routing:** Master global state handling and client-side routing in a production-like environment.
*   **BaaS Integration:** Learn to integrate Appwrite for Authentication, Databases, and Storage.
*   **Form Architecture:** Combine React Hook Form with complex third-party controlled components like TinyMCE.
*   **File Management:** Handle secure file uploads and dynamic image previews via APIs.
*   **Responsive UI:** Design a clean, utility-first user interface using TailwindCSS.

---

## ✨ Features

*   **🧑‍💻 Secure User Authentication**
    *   Sign Up, Login, and Logout functionality powered by Appwrite's Account API.
    *   Session-based persistent authentication with robust error handling.
    *   Global authentication state synchronized instantly via Redux Toolkit.
*   **✍️ Complete CRUD Operations for Blogs**
    *   Create, Read, Update, and Delete blog posts seamlessly.
    *   Interactive creation form containing fields for Title, Slug (auto-generated), Featured Image, and Status.
*   **📖 Integrated Rich Text Editor**
    *   Advanced content creation utilizing TinyMCE, fully integrated as a controlled input via React Hook Form's `Controller`.
*   **🖼️ Image Uploads & Previews**
    *   Dedicated file management via Appwrite Storage.
    *   Instant dynamic image previews on post-creation, editing, and public view pages using `getFilePreview()`.
*   **🔐 Protected Routing**
    *   Navigation guards ensure pages like *Add Post*, *Edit Post*, and *All Posts* are strictly accessible to authenticated users only.
*   **🌐 Public & Filtered Post Feeds**
    *   Displays all public blog posts dynamically where `status === active` using efficient Appwrite Queries (`listDocuments`).

---

## 🧱 Project Structure

```text
src/
├── appwrite/         # Appwrite service configurations (auth, databases, storage)
├── components/       # Reusable UI components (Input, Button, PostCard, RTE, Select)
├── pages/            # Page-level components (Home, Login, Signup, AddPost, EditPost, etc.)
├── store/            # Redux store setup and authentication slices (authSlice)
├── conf/             # Centralized environment variable mappings
├── App.jsx           # Main application shell with layout layout and routing outlet
└── main.jsx          # React application entry point
🛠️ Under the Hood: How It Works1. Authentication FlowPlaintext[ Sign Up / Login ] ──> Appwrite Account API ──> Session Created ──> Update Redux Store
Upon signup, createAccount() registers the user, followed by createEmailSession() for automated login.The global authSlice state is updated, immediately unlocking protected application routes.2. Post Creation & Storage WorkflowStep 1: The user uploads a featured image $\rightarrow$ Saved to Appwrite Storage $\rightarrow$ Returns a unique file.$id.Step 2: The blog document is created in the Appwrite Database, referencing the stored image ID.Step 3: The title is automatically parsed into a URL-friendly format using a regex-based useCallback slug generator:JavaScripttitle.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "-")
3. Data Fetching & QueryingPublic feeds fetch documents safely by filtering parameters using Appwrite's built-in Query system, ensuring draft/inactive posts remain private.⚙️ Core Concepts PracticedTechnologyImplementation DetailsReact HooksCore state and side-effect synchronization using useState, useEffect, and performance optimization via useCallback.React RouterClient-side routing layouts managed using <Outlet />, standard <Link />, and programmatic navigation via useNavigate.Redux ToolkitCentralized auth management leveraging createSlice, useSelector, and useDispatch.React Hook FormHigh-performance, low-re-render form structures utilizing traditional register syntax alongside custom controlled tracking.🛠️ Setup & Environment VariablesTo run this project locally, create a .env file in the root directory and add your Appwrite credentials:Code snippetVITE_APPWRITE_URL="[https://cloud.appwrite.io/v1](https://cloud.appwrite.io/v1)"
VITE_APPWRITE_PROJECT_ID="YOUR_APPWRITE_PROJECT_ID"
VITE_APPWRITE_DATABASE_ID="YOUR_APPWRITE_DATABASE_ID"
VITE_APPWRITE_COLLECTION_ID="YOUR_APPWRITE_COLLECTION_ID"
VITE_APPWRITE_BUCKET_ID="YOUR_APPWRITE_BUCKET_ID"
⚠️ Note: If you are deploying to Netlify, make sure to add these exact keys under Site Settings > Environment Variables so the production build can communicate with your backend database.🧪 Testing TipsSkip Editor During Tests: The TinyMCE rich text editor defaults to an empty string (""). You can skip writing content during quick CRUD testing.Required Fields: Ensure that both the Title and the Featured Image are provided, as they are strict requirements for database document submission.🧾 LicenseThis project is open-source and free to use.Built with ❤️ using React + Appwrite.
