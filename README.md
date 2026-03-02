#📝 MegaBlog – A Full-Stack Blog Website with React & Appwrite

Project Name: MegaBlog 
Tech Stack: React.js, Appwrite (BaaS), Redux Toolkit, React Router, React Hook Form, TailwindCSS, TinyMCE
-------------------------------------------------------------------------------------------------------------------------------------------------------------------


📌 Project Overview
MegaBlog is a modern full-stack blog platform built with React and Appwrite, designed to offer a seamless user experience for creating, updating, and reading blog posts. It includes full authentication, file uploads, protected routes, and dynamic content rendering.

This project is ideal for learners of React looking to explore full-stack development using a backend-as-a-service (BaaS) platform.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------


 🧠Motivation & Learning Goals
Learn how to use React with state management, routing, and forms
Practice integrating Appwrite as a backend service for authentication, database, and storage
Work with Redux Toolkit for centralized state handling
Handle file uploads and image previews with Appwrite's Storage API
Create responsive UI using Tailwind CSS
Use TinyMCE (Rich Text Editor) integrated with React Hook Form

🚀 Features
🧑‍💻 User Authentication (Sign Up, Login, Logout)
Secure sign-up and login functionality using Appwrite's Account API
Session-based authentication with error handling
Protected routes visible only to logged-in users
Redux state updated on successful login/logout

✍️ Create, Edit, and Delete Blog Posts
Post creation form with fields: title, slug (auto-generated), image upload, and rich text content
Image stored in Appwrite Storage and referenced in database
Update and delete functionality built using Appwrite Database and Storage APIs
Rich text content handled using TinyMCE

🖼️ Image Uploads & Preview
Users can upload featured images for blog posts
Uses Appwrite’s Storage service to save images
Preview images on post edit and public pages using getFilePreview()

🌐 Public Post Listing
All public blog posts (with status = active) are listed
Uses listDocuments() with filters via Appwrite Query API
Public-facing route for individual post reading

🔐 Protected Routes
Add Post, Edit Post, and All Posts routes are accessible only after login
Uses authStatus from Redux to conditionally render navigation items

📖 Rich Text Editor Integration (TinyMCE)
Rich content editing for blog posts
Controlled through react-hook-form's Controller component
Optional for testing: defaults to empty content if skipped

🎨 TailwindCSS UI
Fully responsive and clean design
Utility-first styling for layout, form inputs, and buttons

🧱 Project Structure
src/
├── appwrite/           # Appwrite services (auth, config, database)
├── components/         # Reusable UI components (Input, Button, RTE)
├── pages/              # Pages like Home, Login, Signup, AddPost, etc.
├── store/              # Redux slice (authSlice)
├── conf/               # Appwrite env variable mapping
├── App.jsx             # Main App with layout & routing
├── main.jsx            # React entry point

⚙️ React Concepts Used
React Router DOM – Client-side routing using Outlet, Link, useNavigate
Redux Toolkit – createSlice, useSelector, useDispatch for auth state
React Hook Form – Minimal and efficient form handling
useEffect, useState, useCallback – Core hooks for data fetching and side effects
Controlled components – Inputs and editor controlled via register and Controller


🔐 Appwrite Services Used
Account: createAccount, createEmailSession, get, deleteSession
Database: createDocument, updateDocument, deleteDocument, listDocuments, getDocument
Storage: uploadFile, deleteFile, getFilePreview
Query: For filtering active blog posts
🛠️ How Things Work – Under the Hood
🔐 Auth Flow
On sign-up, createAccount() creates a user in Appwrite
Automatically logs the user in using createSession()
Redux authSlice stores current user on success
📄 Post Creation
Upload image → Appwrite Storage → returns file.$id
Create document in database using createPost() with image ID
Auto-generated slug based on title is used as document ID
🧠 Auto Slug Generation
Converts title into a URL-friendly format using .toLowerCase().replace()
📸 Image Previews
Stored image IDs used in getFilePreview() for displaying on cards and edit form

🌐 Deployment – Netlify
Deployed on Netlify:

Automatically pulls from GitHub repo and redeploys on push
.env variables configured in Netlify dashboard
🧪 Testing Tips
You can skip TinyMCE editor content while testing (defaults to "")
Featured image and title are required fields for post submission
📎 Environment Variables (.env)
VITE_APPWRITE_URL=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
VITE_APPWRITE_DATABASE_ID=YOUR_DATABASE_ID
VITE_APPWRITE_COLLECTION_ID=YOUR_COLLECTION_ID
VITE_APPWRITE_BUCKET_ID=YOUR_BUCKET_ID
Set these in Netlify > Site Settings > Environment Variables as well.

🧑‍🎓 Ideal For
React learners wanting full-stack experience
Developers trying BaaS platforms like Appwrite
Portfolio showcase with real-world CRUD
🧾 License
This project is open-source and free to use.

Built with ❤️ using React + Appwrite

